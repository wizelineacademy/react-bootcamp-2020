import React from 'react';
import {render, screen,fireEvent,within } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import VideoContext from "../../providers/VideoContext";
import Home from './Home';
import {BrowserRouter as Route} from "react-router-dom";
import ListVideos from "../../components/ListVideos/ListVideos";
import LogIn from "../Login/LogIn"
describe("<Home/>",()=> {

    const mockValue = {
        setVideoMetaInfo: jest.fn(),
        changingg: false,
        changinggSetChangingg: jest.fn(),
        setFavoritesFlag: jest.fn(),
       
    }

    
    test("rendering List Videos",()=> {
        
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
                <Home />
            </VideoContext.Provider>
        </Route>
        );
         
         expect(<ListVideos/>).toBeTruthy();
        
        
    })

    test("Testing Router Redirect",()=> {
        
        const setVideoMetaInfoTest = jest.fn();
        const changinggSetChanginggTest = jest.fn();
        const setFavoritesFlagTest = jest.fn();
        const userSessionTest = {
            loggedIn:false
        }
        const mockTrigger = {
            userSession: userSessionTest
        }
       
   
        const { container } = render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <Home />
            </VideoContext.Provider>
        </Route>
        );
         
       
        //container.querySelector('/logIn')
        //expect(container.firstChild).toMatchSnapshot()
        
        
    })


})