import React, { useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useAppDataContext } from "../../providers/AppData"
import actions from "../../state/actions";
import darkTheme from "../../utils/Themes/darkTheme";
import lightTheme from "../../utils/Themes/lightTheme";
import { DARK_THEME, LIGHT_THEME, PREFERED_THEME } from "../../utils/constants";
import { storage } from "../../utils/storage";



const GlobalStyles = createGlobalStyle`
*{
   box-sizing:border-box;

}
  body {
     margin: 0;
     padding: 0;
   text-decoration: none;
   font-family: ${(props) => props.theme.fontFam};
    background-color: ${(props) => props.theme.bg};
    transition: 0.5s;
    outline: none;
    color: ${(props) => props.theme.text};

  }
`;


export default function Theme({ children }) {
   const { state, dispatch } = useAppDataContext();


   useEffect(() => {
      if (!storage.get(PREFERED_THEME)) {
         if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dispatch({ type: actions.SET_THEME, payload: DARK_THEME });
         } else {
            dispatch({ type: actions.SET_THEME, payload: LIGHT_THEME });

         }
         window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            dispatch({ type: actions.CHANGE_THEME, payload: e.matches ? DARK_THEME : LIGHT_THEME });
         });
      } else {
         dispatch({ type: actions.SET_THEME, payload: storage.get(PREFERED_THEME)});

      }


   }, [dispatch]);
   return (
      <ThemeProvider theme={state.theme === LIGHT_THEME ? lightTheme : darkTheme}>
         <GlobalStyles />
         {children}
      </ThemeProvider>

   )
}
