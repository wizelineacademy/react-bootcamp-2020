import '@testing-library/jest-dom/extend-expect'
import LogOut from "./LogOut"
import {render, screen, fireEvent } from "@testing-library/react"
import React from 'react';
import VideoContext from '../../providers/VideoContext';

describe("<LogOut/>",()=>{

    test("Triggering onclick and testing all function inside resetValuesLoggedOut function was called",()=> {
        
        const setUserSessionTest = jest.fn();
        const changinggSetChanginggTest = jest.fn(); 
        const setSelectedVideoProppertiesTest = jest.fn(); 
        const setVideoMetaInfoTest = jest.fn(); 
        const setFavoritesFlagTest = jest.fn(); 
        const setFavoritesVideosArrayUserTest = jest.fn(); 

        const userSessionTest = {
            user:"noSession"
        };
        
        const mockValue = {
            userSession : userSessionTest,
            setUserSession : setUserSessionTest,
            changinggSetChangingg : changinggSetChanginggTest, 
            setSelectedVideoPropperties : setSelectedVideoProppertiesTest,
            setVideoMetaInfo : setVideoMetaInfoTest,
            setFavoritesFlag : setFavoritesFlagTest, 
            setFavoritesVideosArrayUser : setFavoritesVideosArrayUserTest 

        };
       
        const { container } = render(
            <VideoContext.Provider value={mockValue}>
                <LogOut/>
            </VideoContext.Provider>
        )
         
        const logOut = screen.getByRole("onClickOut");
        fireEvent.click(logOut)
        expect(changinggSetChanginggTest).toBeCalledWith(false);
        expect(setFavoritesFlagTest).toBeCalledWith(false);
        expect(setVideoMetaInfoTest).toBeCalledWith(new Object);
        expect(setUserSessionTest).toBeCalledWith(new Object);
        expect(setSelectedVideoProppertiesTest).toBeCalledWith(new Object);
        expect(setFavoritesVideosArrayUserTest).toBeCalledWith(new Array);
        
    })

    test("Test expect in p LogIn when u have no Session",()=> {
       
        const userSessionTest = {
            user:"noSession"
        };
        
        const mockValue = {
            userSession : userSessionTest,
        };

        render(
            <VideoContext.Provider value={mockValue}>
                <LogOut/>
            </VideoContext.Provider>
        )
        
        expect(screen.getByText("LogIn")).toBeInTheDocument()

    })
    
    test("Test expect in p LogOut when u have Session",()=> {
       
        const userSessionTest = {
            user:"AnyOtherUser"
        };
        
        const mockValue = {
            userSession : userSessionTest,
        };

        render(
            <VideoContext.Provider value={mockValue}>
                <LogOut/>
            </VideoContext.Provider>
        )
        expect(screen.getByText("LogOut")).toBeInTheDocument()
    })

})