import React from 'react';
import {render, screen,fireEvent,within } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import ReproductorPlayer from './ReproductorPlayer';
import {BrowserRouter as Route} from "react-router-dom";
import FormLogIn from "../../components/logIn/FormLogIn"
import VideoContainer from '../../components/mainContainer/VideoContainer';
import ListVideos from "../../components/listVideos/ListVideos";
import LogIn from "../Login/LogIn"
import Home from "../Home/Home"
import axios from 'axios'
describe("<ReproductorPlayer/>",()=> {
    
    const mockValue = {
        setVideoMetaInfo: jest.fn(),
        changingg: false,
        changinggSetChangingg: jest.fn(),
        setFavoritesFlag: jest.fn(),
       
    }

    
    test("rendering components within ReproductorPlayer Page",()=> {
        
        const videoProppertiesTest = {
            videoId : "id1",
            published : "SomeDate"
        }


        const userSessionTest ={
            loggedIn: true,
            user: "noSession"
        } ;
        const changinggTest = true;

        const mockTrigger = {
            changingg : changinggTest,
            userSession : userSessionTest,
            videoPropperties : videoProppertiesTest
        }
        
        render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <ReproductorPlayer />
            </VideoContext.Provider>
        </Route>
        );
         
         expect(<VideoContainer/>).toBeTruthy();
         expect(<ListVideos/>).toBeTruthy();
         expect (<Home/>).toBeTruthy();
        
    })

    test("rendering component logIn within ReproductorPlayer Page ",()=> {
        
        const videoProppertiesTest = {
            videoId : "id1",
            published : "SomeDate"
        }


        const userSessionTest ={
            loggedIn: false,
            user: "noSession"
        } ;
        const changinggTest = false;

        const mockTrigger = {
            changingg : changinggTest,
            userSession : userSessionTest,
            videoPropperties : videoProppertiesTest
        }
        jest.mock('axios');
        render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <ReproductorPlayer />
            </VideoContext.Provider>
        </Route>
        );
         
         expect(<VideoContainer/>).toBeTruthy();
         expect(<ListVideos/>).toBeTruthy();
         expect (<LogIn/>).toBeTruthy();
        
    })

    



})