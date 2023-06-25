import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './constants';
import { getFontSize } from 'helpers';

const colorVars = Object.entries(colors).map(
	([name, value]) => `--${name}: ${value};`
);
const fontVars = Object.entries(fonts).map(
	([name, value]) => `--${name}: ${value};`
);

export const GlobalStyles: any = createGlobalStyle`
  :root{
    ${colorVars}
    ${fontVars}
    --boxShadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }
  html, body, #__next, .app{
    height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
  }
  body, input, select, textarea, button{
    color: var(--paragraph);
    font-family: var(--primaryFont);
    font-weight: 400;
    ${() => getFontSize('Medium')};
  }
  *{
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  html, body, #root {
    display: block;
  }
  strong{
    font-weight: 900;
  }
  b{
    font-weight: 700;
  }
  a{
    color: var(--primary);
    @media (hover: hover) {
    &:hover{
      text-decoration: none;
    }
  }
    &:active{
      text-decoration: underline;
    }
  }
  ul{
    &.unset{
      list-style-type: none;
      display: flex;
      margin: 0;
      padding: 0
    }
  }
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0px 3px var(--neutral200); 
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--neutral200); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--neutral100); 
}
`;

export default GlobalStyles;
