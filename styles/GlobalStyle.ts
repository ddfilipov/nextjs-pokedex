import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  
html{
    background-color: #282c34;
}

a{
    color: inherit;
    text-decoration: none;
}

`;

export default GlobalStyle;
