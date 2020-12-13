import React from 'react';
import {render, screen,fireEvent,within } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import LogIn from './LogIn';
import {BrowserRouter as Route} from "react-router-dom";
import FormLogIn from "../../components/FormLogIn/FormLogIn"

describe("<LogIn/>",()=> {

    const mockValue = {
        setVideoMetaInfo: jest.fn(),
        changingg: false,
        changinggSetChangingg: jest.fn(),
        setFavoritesFlag: jest.fn(),
       
    }
    
    test("Rendering FormLogIn within LogIn Page",()=> {
        
        const setVideoMetaInfoTest = jest.fn();
        const changinggSetChanginggTest = jest.fn();
        const setFavoritesFlagTest = jest.fn();
        const userSessionTest = {
            loggedIn:true
        }
        const mockTrigger = {
            setVideoMetaInfo:setVideoMetaInfoTest,
            changinggSetChangingg:changinggSetChanginggTest,
            setFavoritesFlag:setFavoritesFlagTest,
            userSession: userSessionTest
        }
 
        const { getByTestId } = render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <LogIn />
            </VideoContext.Provider>
        </Route>
        );
         const logInn = getByTestId('loginn')
         expect(<FormLogIn/>).toBeTruthy();
        
    })

})