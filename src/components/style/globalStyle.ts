import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
li {
  list-style: none;
}
button {
  cursor:pointer;
}
a {
  text-decoration: none;
}
`;
