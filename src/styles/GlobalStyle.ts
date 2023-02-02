import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
   
html{
    background-color: #282c34;
	// types variables
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
	// app styles
	--secondary-color: #D16f51;
	--dark-color: #001015
}

a{
    color: inherit;
    text-decoration: none;
}

`;

export default GlobalStyle;

export const MainAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 10px;
    gap: 5px;
`;
