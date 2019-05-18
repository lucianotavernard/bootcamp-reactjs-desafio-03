import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #454545;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
