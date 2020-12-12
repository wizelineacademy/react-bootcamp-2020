import React from 'react';
import {render, screen,fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import SearchBar from './SearchBar';
import waitForExpect from 'wait-for-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import videos from "../../MockVideos/MockVideos";

describe("<SeachBar/>",()=> {
    const mock = new MockAdapter(axios);

    const mockValue = {
        setVideoMetaInfo: jest.fn(),
        changingg: false,
        changinggSetChangingg: jest.fn(),
        setFavoritesFlag: jest.fn(),
       
    }

    test('renders SearhBar in DOM',()=>{
        render(
            <VideoContext.Provider value={mockValue}>
                <SearchBar/>
            </VideoContext.Provider>
        );
        expect(screen.getByPlaceholderText("Search Video...")).toBeTruthy();
        expect(screen.getByRole("boton")).toBeInTheDocument();
    });

    test('inspect the YoutubeApi Response', async () => {
        const responseMock = {...videos};
         
       const setUserSessionTest= jest.fn();
        const userSessionTest = {
            user: "noSession",
            pass: "",
            email: "",
            loggedIn: true
        }
        const changinggSetChanginggTest = jest.fn();
        const setFavoritesFlagTest = jest.fn();
        const setVideoMetaInfoTest = jest.fn();
        const setInputWordTest= jest.fn();
        const mockValue = {
            setUserSession : setUserSessionTest,
            changinggSetChangingg : changinggSetChanginggTest,
            setFavoritesFlag : setFavoritesFlagTest,
            userSession : userSessionTest,
            setVideoMetaInfo : setVideoMetaInfoTest,
            setInputWord : setInputWordTest
        }
    
        mock.onGet("/search").reply(200, responseMock);
       
        const utils = render(
        
            <VideoContext.Provider value={mockValue}>
                 <SearchBar />
            </VideoContext.Provider>
       
        
        )
        fireEvent.click(screen.getByRole("boton"));

        await waitForExpect(()=>{
            expect(changinggSetChanginggTest).toBeCalledWith(false);
            expect(setFavoritesFlagTest).toBeCalledWith(false);
            expect(setVideoMetaInfoTest).toBeCalledWith(responseMock.items);
            
        });
         
      },5000);


      test('inspect the empty YoutubeApi Response', async () => {
        const responseMock = {};
         
       const setUserSessionTest= jest.fn();
        const userSessionTest = {
            user: "noSession",
            pass: "",
            email: "",
            loggedIn: true
        }
        const changinggSetChanginggTest = jest.fn();
        const setFavoritesFlagTest = jest.fn();
        const setVideoMetaInfoTest = jest.fn();
        const setInputWordTest= jest.fn();
        const mockValue = {
            setUserSession : setUserSessionTest,
            changinggSetChangingg : changinggSetChanginggTest,
            setFavoritesFlag : setFavoritesFlagTest,
            userSession : userSessionTest,
            setVideoMetaInfo : setVideoMetaInfoTest,
            setInputWord : setInputWordTest
        }
    
        mock.onGet("/search").reply(200, responseMock);
    
        const utils = render(
        
            <VideoContext.Provider value={mockValue}>
                 <SearchBar />
            </VideoContext.Provider>
       
        
        )
        fireEvent.click(screen.getByRole("boton"));

        await waitForExpect(()=>{
          
            expect(setVideoMetaInfoTest).toBeCalledTimes(0);
            
        });
         
      },5000);

    test("trigger onChange event on SearchBar inspect the value",()=> {
        
        const utils = render(<VideoContext.Provider value={mockValue}>
            <SearchBar/>
        </VideoContext.Provider>)
        const input = utils.getByRole('inputSearch')
        fireEvent.change(input, { target: { value: 'Search youtube video' } })
        expect(input.value).toBe('Search youtube video')
       

    })



})