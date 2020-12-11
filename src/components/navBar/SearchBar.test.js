import React from 'react';
import {render, screen,fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import VideoContext from "../../providers/VideoContext";
import SearchBar from './SearchBar';

describe("<SeachBar/>",()=> {

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

    test("trigger onclick event on SearchBar to call methods",()=> {
        
        const setVideoMetaInfoTest = jest.fn();
        const changinggSetChanginggTest = jest.fn();
        const setFavoritesFlagTest = jest.fn();
       
        const mockTrigger = {
            setVideoMetaInfo:setVideoMetaInfoTest,
            changinggSetChangingg:changinggSetChanginggTest,
            setFavoritesFlag:setFavoritesFlagTest
           
        }
        const name = "testing"
        const image = "https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg";
        const params = {
            videoName: name,
            imageVideo: image
        }
        const inputTextTest = render(<VideoContext.Provider value={mockTrigger}>
            <SearchBar />
        </VideoContext.Provider>);
        const searchVideo = screen.getByRole("boton");
        const input = inputTextTest.getByRole('inputSearch')
        fireEvent.click(searchVideo)
        fireEvent.change(input, { target: { value: 'Enrique' } })
       // expect()
        //expect(setSelectedVideoProppertiesMock).toBeCalledWith(params);
        expect(changinggSetChanginggTest).toBeCalled()
        expect(setFavoritesFlagTest).toBeCalled()

    })

    test("trigger onChange event on SearchBar inspect the value",()=> {
        
        const utils = render(<VideoContext.Provider value={mockValue}>
            <SearchBar/>
        </VideoContext.Provider>)
        const input = utils.getByRole('inputSearch')
        fireEvent.change(input, { target: { value: 'Search youtube video' } })
        expect(input.value).toBe('Search youtube video')
       

    })



})