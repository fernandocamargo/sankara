import property from 'lodash/property';
import { type Interpolation, createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  div#root {
    min-height: 100vh;
  }

  html {
    background-color: #fbfcfc;
    opacity: 1;
  }

  body {
    font-family: ${property('theme.typography.main') as Interpolation<any>};
  }

  nav {
    h4 {
      display: none;
    }
  }

  pre {
    font-size: 0.75rem;
  }
`;
