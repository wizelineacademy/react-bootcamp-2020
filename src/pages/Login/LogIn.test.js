import React from 'react';
import {render, screen,fireEvent,within } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import LogIn from './LogIn';
import {BrowserRouter as Route} from "react-router-dom";
import FormLogIn from "../../components/logIn/FormLogIn"

describe("<LogIn/>",()=> {

    const mockValue = {
        setVideoMetaInfo: jest.fn(),
        changingg: false,
        changinggSetChangingg: jest.fn(),
        setFavoritesFlag: jest.fn(),
       
    }

    
    test("tendering FormLogIn within LogIn Page",()=> {
        
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
        const name = "testing"
        const image = "https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg";
        const params = {
            videoName: name,
            imageVideo: image
        }
        const { getAllByTestId, getByTestId } = render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <LogIn />
            </VideoContext.Provider>
        </Route>
        );
         const logInn = getByTestId('loginn')
         const formLogIn = within(logInn).getByText('Without Session')
         expect(<FormLogIn/>).toBeTruthy();
        
    })

    



})