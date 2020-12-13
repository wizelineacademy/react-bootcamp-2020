import React from 'react';
import {render, screen,fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import ButtonFavorites from './ButtonFavorites';

describe("<ButtonFavorites/>",()=> {
   
   test("Trigger onclick event on ButtonFavorites and call within methods",()=> {
           
        const favoriteVideosMapUserTest = new Map();

        const userSessionTest = {
            user: "UserTest"
        }

        const testingMap = new Map();

        const videoProppertiesTest = {
            videoName: "VideoNameTest",
            videoId: "songTest",
            views: "",
            likes: "",
            dislikes: "",
            published: "SomeDate",
            imageVideo: "someImage",
            buttonText: "Add to favorites"
        }

        testingMap.set(videoProppertiesTest.videoId,videoProppertiesTest);
        favoriteVideosMapUserTest.set(userSessionTest.user,testingMap);
        
        const mockTrigger = {
            userSession : userSessionTest,
            favoriteVideosMapUser : favoriteVideosMapUserTest,
            videoPropperties : videoProppertiesTest

        }
    
        const inputTextTest = render(
        <VideoContext.Provider value={mockTrigger}>
            <ButtonFavorites />
        </VideoContext.Provider>
        );

        const addFavoritesButton = screen.getByRole("boton");
        fireEvent.click(addFavoritesButton)

        expect(videoProppertiesTest.videoId).toContain("songTest")
        expect(favoriteVideosMapUserTest).toEqual(favoriteVideosMapUserTest)
        expect(userSessionTest).toEqual(userSessionTest)

    })

    test("Trigger onclick event on ButtonFavorites and check (if favoriteVideosMapUser) validation",()=> {
           
        const favoriteVideosMapUserTest = new Map();
        const userSessionTest = {};
        const testingMap = new Map();
        const videoProppertiesTest = {};
        testingMap.set(videoProppertiesTest.videoId,videoProppertiesTest);
        
        const mockTrigger = {
            userSession : userSessionTest,
            favoriteVideosMapUser : favoriteVideosMapUserTest,
            videoPropperties : videoProppertiesTest

        }
    
        const inputTextTest = render(
        <VideoContext.Provider value={mockTrigger}>
            <ButtonFavorites />
        </VideoContext.Provider>
        );

        const addFavoritesButton = screen.getByRole("boton");
        fireEvent.click(addFavoritesButton)
        expect(favoriteVideosMapUserTest).toEqual(favoriteVideosMapUserTest)
        
    })

})