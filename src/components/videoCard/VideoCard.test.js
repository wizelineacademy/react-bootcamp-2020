import '@testing-library/jest-dom/extend-expect'
import VideoCard from './VideoCard';
import {render, screen, fireEvent } from "@testing-library/react"
import React from 'react';
import VideoContext from '../../providers/VideoContext';



describe("<VideoCard/>",()=>{
    const mockValue = {
        // response: {},
        // setResponse: jest.fn,
        // videoMetaInfo: [],
        // setVideoMetaInfo: jest.fn,
        // videoPropperties: {},
        // setSelectedVideoPropperties: jest.fn,
        // userSession: {},
        // setUserSession: jest.fn,
        changingg: false,
        changinggSetChangingg: jest.fn(),
        // favoriteVideosMapUser: new Map(),
        // setFavoriteVideosMapUser: jest.fn,
        // favoritesFlag: false,
        // setFavoritesFlag: jest.fn,
        // favoritesVideosArrayUser: [],
        // setFavoritesVideosArrayUser: jest.fn
    }


    test("trigger onclick event on VideoCard to set video properties",()=> {
        const setSelectedVideoProppertiesMock = jest.fn();
        const changinggSetChangingg = jest.fn();
        
        const mockTrigger = {
            setSelectedVideoPropperties: setSelectedVideoProppertiesMock,
            changingg: false,
            changinggSetChangingg: changinggSetChangingg,
           
        }
        const name = "testing"
        const image = "https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg";
        const param = {
            videoName: name,
            imageVideo: image
        }
        render(
            <VideoContext.Provider value={mockTrigger}>
                <VideoCard name={name} imagen={image} />
            </VideoContext.Provider>
        );
        const videoCard = screen.getByRole("onclick");
        fireEvent.click(videoCard)
        expect(setSelectedVideoProppertiesMock).toBeCalledWith(param);
        expect(changinggSetChangingg).toBeCalledWith(true)

    })

    test("testing name text and alt", () => {
        const name = "testingName"
        render(<VideoContext.Provider value={mockValue}>
            <VideoCard name={name} imagen='https://i.pinimg.com/564x/fa/c2/cf/fac2cfb7869aa623d830c7f76f4e58dd.jpg' />
        </VideoContext.Provider>);
        
        expect(screen.getByText(name)).toBeInTheDocument()
        expect(screen.getByAltText(name)).toBeInTheDocument()
       
    })

    test ("testing changingg false",()=>{
        const changinggTest = false;
        const changinggSetChacnginggTest = jest.fn();

        const mockVideoContext ={
            changingg:changinggTest,
            changinggSetChacngingg:changinggSetChacnginggTest
        }
        
        const { container } = render(
        <VideoContext.Provider value={mockVideoContext}>
            <VideoCard />
        </VideoContext.Provider>
        );
       
        expect(container.firstChild).toHaveClass("grid-item2")
        

    });
    test ("testing changingg true",()=>{

        const changinggTest = true;
        const changinggSetChacnginggTest = jest.fn();
        const mockVideoContext ={
            changingg:changinggTest,
            changinggSetChacngingg:changinggSetChacnginggTest
        }
        
        const { container } = render(
        <VideoContext.Provider value={mockVideoContext}>
            <VideoCard />
        </VideoContext.Provider>
        );
       
        expect(container.firstChild).toHaveClass("noClass")
        

    });



}) 