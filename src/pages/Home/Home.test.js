import React from 'react';
import {render, screen,fireEvent,within } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import VideoContext from "../../providers/VideoContext";
import Home from './Home';
import {BrowserRouter as Route} from "react-router-dom";
import ListVideos from "../../components/ListVideos/ListVideos";

describe("<Home/>",()=> {

    const mockValue = {
        setVideoMetaInfo: jest.fn(),
        changingg: false,
        changinggSetChangingg: jest.fn(),
        setFavoritesFlag: jest.fn(),
       
    }

    test("Rendering List Videos",()=> {
        
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

        render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <Home />
            </VideoContext.Provider>
        </Route>
        );
         
         expect(<ListVideos/>).toBeTruthy();
          
    })

})