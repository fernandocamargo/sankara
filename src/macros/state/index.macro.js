const { createMacro } = require('babel-plugin-macros');

function macro({ references, babel, state }) {
  console.log({ references, babel, state });
}

module.exports = createMacro(macro);
