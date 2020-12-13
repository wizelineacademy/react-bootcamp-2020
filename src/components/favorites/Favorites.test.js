import '@testing-library/jest-dom/extend-expect'
import Favorites from './Favorites';
import {render, screen, fireEvent } from "@testing-library/react"
import React from 'react';
import VideoContext from '../../providers/VideoContext';

describe("<Favorites/>",()=>{

    test("Test to be called all function within showVideoFavorites function ",()=> {
        const setFavoritesFlagTest = jest.fn(); 
        const changinggSetChanginggTest = jest.fn(); 
        const favoriteVideosMapUserTest = new Map();

        const userSessionTest = {
            user:"SomeUser"
        };
        const testingMap = new Map();
        const videoPropertiesTest = {
            videoName: "VideoNameTest",
            videoId: "song1",
            views: "",
            likes: "",
            dislikes: "",
            published: "SomeDate",
            imageVideo: "someImage",
            buttonText: "Add to favorites"
        }
        testingMap.set(videoPropertiesTest.videoId,videoPropertiesTest);
        
        favoriteVideosMapUserTest.set(userSessionTest.user,testingMap);

        const setFavoritesVideosArrayUserTest = jest.fn();
        
        const mockValue = {
            setFavoritesFlag : setFavoritesFlagTest, 
            changinggSetChangingg : changinggSetChanginggTest, 
            userSession : userSessionTest,
            favoriteVideosMapUser:favoriteVideosMapUserTest,
            setFavoritesVideosArrayUser:setFavoritesVideosArrayUserTest

        };
       
        const { container } = render(
            <VideoContext.Provider value={mockValue}>
                <Favorites/>
            </VideoContext.Provider>
        )
         
        const logOut = screen.getByRole("favbuton");
        const arrayTest = new Array();
        arrayTest.push(testingMap.get(videoPropertiesTest.videoId));

        fireEvent.click(logOut)
        expect(setFavoritesFlagTest).toBeCalledWith(true);
        expect(setFavoritesVideosArrayUserTest).toBeCalledWith(arrayTest);
        
         
        
    })

    test("Testing  (if favoriteVideos) ",()=> {
        const setFavoritesFlagTest = jest.fn(); 
        const changinggSetChanginggTest = jest.fn(); 
        const favoriteVideosMapUserTest = new Map();
        const userSessionTest = {
            user:"SomeUser"
        };
        const testingMap = new Map();
        const videoPropertiesTest = {
            videoName: "VideoNameTest",
            videoId: "idTest",
            views: "",
            likes: "",
            dislikes: "",
            published: "SomeDate",
            imageVideo: "someImage",
            buttonText: "Add to favorites"
        }
        
        testingMap.set(videoPropertiesTest.videoId,videoPropertiesTest);

        const setFavoritesVideosArrayUserTest = jest.fn();
        
        const mockValue = {
            setFavoritesFlag : setFavoritesFlagTest, 
            changinggSetChangingg : changinggSetChanginggTest, 
            userSession : userSessionTest,
            favoriteVideosMapUser:favoriteVideosMapUserTest,
            setFavoritesVideosArrayUser:setFavoritesVideosArrayUserTest

        };
       
        const { container } = render(
            <VideoContext.Provider value={mockValue}>
                <Favorites/>
            </VideoContext.Provider>
        )
         
        const logOut = screen.getByRole("favbuton");
        const arrayTest = new Array();
        arrayTest.push(testingMap.get(videoPropertiesTest.videoId));

        fireEvent.click(logOut)
       
        expect(setFavoritesVideosArrayUserTest).toBeCalledTimes(0);
        
         
        
    })
 
})