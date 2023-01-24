import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  
html{
    background-color: #282c34;
	--normal-background: #A8A77A;
	--fire-background: #EE8130;
	--water-background: #6390F0;
	--electric-background: #F7D02C;
	--grass-background: #7AC74C;
	--ice-background: #96D9D6;
	--fighting-background: #C22E28;
	--poison-background: #A33EA1;
	--ground-background: #E2BF65;
	--flying-background: #A98FF3;
	--psychic-background: #F95587;
	--bug-background: #A6B91A;
	--rock-background: #B6A136;
	--ghost-background: #735797;
	--dragon-background: #6F35FC;
	--dark-background: #705746;
	--steel-background: #B7B7CE;
	--fairy-background: #D685AD;
}

a{
    color: inherit;
    text-decoration: none;
}

`;

export default GlobalStyle;
