import React from 'react';
import {render, screen,fireEvent,within } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import {BrowserRouter as Route} from "react-router-dom";
import App from "./App"
describe("<App/>",()=> {
   
    test("testing app rendering",()=> {
        render(
         <VideoContext.Provider>
             <App />
         </VideoContext.Provider>
         );
        expect(<App/>).toBeTruthy();
     })

 })