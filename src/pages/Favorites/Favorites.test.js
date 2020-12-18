import React from'react';
import { render, cleanup } from '@testing-library/react';
import Favorites from './';
import { StateContext } from '../../utils/State';
import { VideoContext } from '../../utils/VideoState';
import { ConfigState } from '../../utils/ConfigState';
import { HashRouter } from 'react-router-dom'

afterEach(cleanup);


describe('Should have components with changing state', () => {

    const providerPropsS = {
        state: {
            Sesion: {
                User: "User",
                Password: "123"
            },
        },
        dispatchS: () => {}
    };

    const providerPropsV = {
        state: {
            SearchVideo: "",
            CurrentVideo: {},
            FavoriteVideos: [
                {
                    title: "Hola", 
                    description: "Que hay", 
                    publishTime: "12/12/2020", 
                    image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                    videoId: "0qGd0F9eCMo"
                },
                {
                    title: "Hola", 
                    description: "Que hay", 
                    publishTime: "12/12/2020", 
                    image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                    videoId: "0qGd0F9eCM2"
                },
                {
                    title: "Hola", 
                    description: "Que hay", 
                    publishTime: "12/12/2020", 
                    image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                    videoId: "0qGd0F9eCM1"
                }
            ],
        },
        dispatchV: () => {}
    };

    it('Should have a videoItem ', () => {
        const { getAllByTestId } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV}>
                    <HashRouter>
                        <ConfigState>
                            <Favorites />
                        </ConfigState>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );
        expect(getAllByTestId("CardVideo")[0]).toBeInTheDocument();
    });

    it('Should have 3 videoItems ', () => {
        const { getAllByText } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV}>
                    <HashRouter>
                        <ConfigState>
                            <Favorites />
                        </ConfigState>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );
        expect(getAllByText("Hola").length === 3).toBeTruthy();
    });

});

