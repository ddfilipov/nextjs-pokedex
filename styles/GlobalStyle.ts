import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  
html{
    background-color: #282c34;
	--normal-background: '#A8A77A',
	--fire-background: '#EE8130',
	--water-background: '#6390F0',
	--electric-background: '#F7D02C',
	--grass-background: '#7AC74C',
	--ice-background: '#96D9D6',
	--fighting-background: '#C22E28',
	--poison-background: '#A33EA1',
	--ground-background: '#E2BF65',
	--flying-background: '#A98FF3',
	--psychic-background: '#F95587',
	--bug-background: '#A6B91A',
	--rock-background: '#B6A136',
	--ghost-background: '#735797',
	--dragon-background: '#6F35FC',
	--dark-background: '#705746',
	--steel-background: '#B7B7CE',
	--fairy-background: '#D685AD',
	--normal-font: 'red',
	--fire-font: 'red',
	--water-font: 'red',
	--electric-font: 'red',
	--grass-font: 'red',
	--ice-font: 'red',
	--fighting-font: '#red',
	--poison-font: '#red',
	--ground-font: '#red',
	--flying-font: '#red',
	--psychic-font: '#red',
	--bug-font: '#red',
	--rock-font: '#red',
	--ghost-font: '#red',
	--dragon-font: '#red',
	--dark-font: '#red',
	--steel-font: '#red',
	--fairy-font: '#red',
}

a{
    color: inherit;
    text-decoration: none;
}

`;

export default GlobalStyle;
