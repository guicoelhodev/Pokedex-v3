import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
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

::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #47acd2;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #357d99;
  }
  
  body {
    scrollbar-color: #47acd2 #f1f1f1;
    scrollbar-width: thin;

  }
`;
