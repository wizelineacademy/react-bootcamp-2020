import React from 'react';
import {  render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import AppDataProvider from '../../providers/AppData';

import darktheme from "../../utils/Themes/darkTheme";
import Header from '../Header';
describe("Header", () => {


   it("it renders his buttons", () => {
      render(
         <AppDataProvider>
            <ThemeProvider theme={darktheme}>
               <Header/>
            </ThemeProvider>
         </AppDataProvider>
      )

      const button = screen.getAllByRole("button");
      expect(button).toBeTruthy()

   })


})