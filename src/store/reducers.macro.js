const { parse, relative } = require('path');
const process = require('process');
const { createMacro } = require('babel-plugin-macros');

const { name } = parse(relative(process.cwd(), __filename));

function macro({ babel, state }) {
  const {
    types: {
      exportNamedDeclaration,
      identifier,
      isImportDeclaration,
      objectExpression,
      objectProperty,
      stringLiteral,
      variableDeclaration,
      variableDeclarator,
    },
  } = babel;
  const {
    file: {
      ast: {
        program: { body },
      },
    },
  } = state;
  const findByName = (path) =>
    isImportDeclaration(path) && path.source.value.endsWith(name);
  const {
    specifiers: [{ local }],
  } = body.find(findByName);

  body.push(
    exportNamedDeclaration(
      variableDeclaration('const', [
        variableDeclarator(
          identifier(local.name),
          objectExpression([
            objectProperty(identifier('foo'), stringLiteral('bar')),
          ])
        ),
      ])
    )
  );
}

module.exports = createMacro(macro);
