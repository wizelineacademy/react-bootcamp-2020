import React from 'react';
import {render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import ReproductorPlayer from './ReproductorPlayer';
import {BrowserRouter as Route} from "react-router-dom";
import VideoContainer from '../../components/VideoContainer/VideoContainer';
import ListVideos from "../../components/ListVideos/ListVideos";
import Home from "../Home/Home"

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

    test("Redirect to logIn with changing false and loggedIn true",()=> {
        
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
       
        const {container} = render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <ReproductorPlayer />
            </VideoContext.Provider>
        </Route>
        );
        container.querySelector('/logIn')
        expect(container.firstChild).toMatchSnapshot()
        
    })

    test("Redirect to Home with changing false and loggedIn true  ",()=> {
        
        const videoProppertiesTest = {
            videoId : "id1",
            published : "SomeDate"
        }


        const userSessionTest ={
            loggedIn: true,
            user: "noSession"
        } ;
        const changinggTest = false;

        const mockTrigger = {
            changingg : changinggTest,
            userSession : userSessionTest,
            videoPropperties : videoProppertiesTest
        }
       
        const {container} = render(
        <Route>
            <VideoContext.Provider value={mockTrigger}>
                <ReproductorPlayer />
            </VideoContext.Provider>
        </Route>
        );
       
        container.querySelector('/')
        expect(container.firstChild).toMatchSnapshot()
       
        
    })


})