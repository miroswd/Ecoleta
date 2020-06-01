import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body {
    background:#f0f0f5;
    -webkit-font-smoothing:antialiased;
  }

  body, input, button {
    font-size:16px;
    font-family: 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight:700;
    font-family: 'Ubuntu', sans-serif;

  }

  button {
    cursor: pointer;
  }


`;
