import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import FormLogIn from "./FormLogIn";
import '@testing-library/jest-dom/extend-expect'
import {render, screen, fireEvent } from "@testing-library/react"
import waitForExpect from 'wait-for-expect';
import React from 'react';
import VideoContext from '../../providers/VideoContext';
import {BrowserRouter as Router} from 'react-router-dom';
import videos from "../../MockVideos/MockVideos";
 
describe('<FormLogin/>', () => {
    const mock = new MockAdapter(axios);

  it('fetches successfully data from an API', async () => {
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
    const mockValue = {
        setUserSession : setUserSessionTest,
        changinggSetChangingg : changinggSetChanginggTest,
        setFavoritesFlag : setFavoritesFlagTest,
        userSession : userSessionTest,
        setVideoMetaInfo : setVideoMetaInfoTest
    }

    mock.onGet("/search").reply(200, responseMock);

    const utils = render(
    <Router>
        <VideoContext.Provider value={mockValue}>
            <FormLogIn/>
        </VideoContext.Provider>
    </Router>
    
    )

    fireEvent.click(screen.getByRole("onLogWS"));
    await waitForExpect(()=>{
        expect(changinggSetChanginggTest).toBeCalledWith(false);
        expect(setFavoritesFlagTest).toBeCalledWith(false);
        expect(setVideoMetaInfoTest).toBeCalledWith(responseMock.items);
    });
    
  })

  it('testing LogOut', async () => {
    
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
    const mockValue = {
        setUserSession : setUserSessionTest,
        changinggSetChangingg : changinggSetChanginggTest,
        setFavoritesFlag : setFavoritesFlagTest,
        userSession : userSessionTest,
        setVideoMetaInfo : setVideoMetaInfoTest
    }

   

    const utils = render(
    <Router>
        <VideoContext.Provider value={mockValue}>
            <FormLogIn/>
        </VideoContext.Provider>
    </Router>
    
    )

    fireEvent.click(screen.getByRole("onLogWS"));
    
    expect(setUserSessionTest).toBeCalledTimes(1);
   

  })

  it('Testing LogIn', async () => {
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
    const mockValue = {
        setUserSession : setUserSessionTest,
        changinggSetChangingg : changinggSetChanginggTest,
        setFavoritesFlag : setFavoritesFlagTest,
        userSession : userSessionTest,
        setVideoMetaInfo : setVideoMetaInfoTest
    }

    mock.onGet("/search").reply(200, responseMock);

    const {utils} = render(
    <Router>
        <VideoContext.Provider value={mockValue}>
            <FormLogIn/>
        </VideoContext.Provider>
    </Router>
    
    )

    
    fireEvent.click(screen.getByRole("aria-roledescription"));
    
    await waitForExpect(()=>{
        expect(changinggSetChanginggTest).toBeCalledWith(false);
        expect(setFavoritesFlagTest).toBeCalledWith(false);
        expect(setVideoMetaInfoTest).toBeCalledWith(responseMock.items);
    });
    
    
  })



});