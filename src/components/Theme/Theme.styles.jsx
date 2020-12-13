import {createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*{
   box-sizing:border-box;
   font-family: ${(props) => props.theme.fontFamily};


}
  body {
     margin: 0;
     padding: 0;
    text-decoration: none;
    background-color: ${(props) => props.theme.bg};
    transition: 0.5s;
    outline: none;
    color: ${(props) => props.theme.text};

  }
`;
export {GlobalStyles}