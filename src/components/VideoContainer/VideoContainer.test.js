import '@testing-library/jest-dom/extend-expect'
import VideoContainer from "./VideoContainer"
import {render, screen, fireEvent } from "@testing-library/react"
import React from 'react';
import VideoContext from '../../providers/VideoContext';


describe("<VideoContainer/>",()=>{

    test("Test title iframe and tags containers",()=> {
        
        const userSessionTest = {
            user:"noSession"
        };

        const videoProppertiesTest =  {
            videoName: "One video Name",
            published: "Somedate",
            videoId : "Id1"
        }
        
        
        const mockValue = {
            userSession : userSessionTest,
            videoPropperties : videoProppertiesTest,
        };
       
        render(
            <VideoContext.Provider value={mockValue}>
                <VideoContainer/>
            </VideoContext.Provider>
        )
         
        expect(screen.getByText(videoProppertiesTest.videoName)).toBeInTheDocument()
        expect(screen.getByText('Published on: ' + videoProppertiesTest.published)).toBeInTheDocument()
        expect(screen.getByTitle(videoProppertiesTest.videoId)).toBeInTheDocument()
       
    })

    test("Test src iframe",()=> {

        const userSessionTest = {
            user:"noSession"
        };

        const videoProppertiesTest =  {
            videoName: "One video Name",
            published: "Somedate",
            videoId : "Id1"
        }
     
        const mockValue = {
            userSession : userSessionTest,
            videoPropperties : videoProppertiesTest,
        };
       
        render(
            <VideoContext.Provider value={mockValue}>
                <VideoContainer/>
            </VideoContext.Provider>
        )
         
        expect(screen.getByTitle(videoProppertiesTest.videoId)).toHaveAttribute('src', "https://www.youtube.com/embed/" + videoProppertiesTest.videoId)

    })

    test("Test expect button text when u have logged in ",()=> {
       
        const userSessionTest = {
            user:"OtherValue"
        };

        const videoProppertiesTest =  {
            videoName: "One video Name",
            published: "Somedate",
            
        }
        
        const mockValue = {
            userSession : userSessionTest,
            videoPropperties : videoProppertiesTest,
        };
       
        render(
            <VideoContext.Provider value={mockValue}>
                 <VideoContainer/>
            </VideoContext.Provider>
        )
        
        expect(screen.getByText("Add to favorites")).toBeTruthy();

    })

})