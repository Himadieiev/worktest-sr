import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

#root {
  min-height: 100vh;
}

body {
  margin: 0;
  font-family: 'Right Grotesk Compact', sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  background-color: #181818;
  color: #fff;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.body-no-scroll {
  overflow: hidden;
}

a{
  color: inherit
}

input:focus, a:focus, button:focus {
  outline: 1px solid #fff;
}
`;
