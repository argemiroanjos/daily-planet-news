import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #98FB98;
}

h1 {
  display: flex;
  color: #006400;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
}
`;

export default GlobalStyle;
