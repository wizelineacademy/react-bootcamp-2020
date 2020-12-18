import React from'react';
import { render, cleanup } from '@testing-library/react';
import Player from './';
import { State, StateContext } from '../../utils/State';
import { ConfigState, ConfigContext } from '../../utils/ConfigState';
import { VideoState, VideoContext } from '../../utils/VideoState';
import { HashRouter, useHistory } from 'react-router-dom';


afterEach(cleanup);

describe('Should have some components', () => {
    
    it('Should have iframe component', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <HashRouter>
                            <Player/>
                        </HashRouter>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('Iframe')).toBeInTheDocument();
    });

    it('Should have Title equal ""', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <HashRouter>
                            <Player/>
                        </HashRouter>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('VideoTitle')).toHaveTextContent("");
    });

    it('Should have Description equal ""', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <HashRouter>
                            <Player/>
                        </HashRouter>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('VideoDesc')).toHaveTextContent("");
    });

    it('Should have video list items', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <HashRouter>
                            <Player/>
                        </HashRouter>
                    </VideoState>
                </ConfigState>
            </State>
        );
        setTimeout(() => {
            expect(getByTestId('ListVidItem')).toBeInTheDocument();
        }, 2000);
    });

    it('Should have background "white" & color text "grey" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <HashRouter>
                            <Player/>
                        </HashRouter>
                    </VideoState>
                </ConfigState>
            </State>
        );
        setTimeout(() => {
            expect(getByTestId('ListVidItem')).toHaveStyle({ background: "white", color: "grey" });
        }, 2000);        
    });

    it('Should have 20 video items in the list ', () => {
        const { getAllByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <HashRouter>
                            <Player/>
                        </HashRouter>
                    </VideoState>
                </ConfigState>
            </State>
        );
        setTimeout(() => {
            expect(getAllByTestId('ListVidItem').length === 20).toBeTruthy();
        }, 2000);
    });

    it('Video items in the list sould have Title ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <HashRouter>
                            <Player/>
                        </HashRouter>
                    </VideoState>
                </ConfigState>
            </State>
        );
        setTimeout(() => {
            expect(getByTestId('ListVidItemTitle')).toBeInTheDocument();
        }, 2000);
    });


})

describe('Changing state', () => {

    const providerPropsC = {
        state: {
            Theme: {
                PrimaryColor: "#494A4A",
                SecondaryColor: "#0E65AD",
                TextColor: "white",
            },
            DarkMode: true,
        },
        dispatchC: () => {}
    };

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
            CurrentVideo: {
                title: "Hola", 
                description: "Que hay", 
                publishTime: "12/12/2020", 
                image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                videoId: "0qGd0F9eCMo"
            },
            FavoriteVideos: [
                {
                    title: "Hola x1", 
                    description: "Que hay", 
                    publishTime: "12/12/2020", 
                    image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                    videoId: "0qGd0F9eCM1"
                },
                {
                    title: "Hola x2", 
                    description: "Que hay", 
                    publishTime: "12/12/2020", 
                    image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                    videoId: "0qGd0F9eCM2"
                },
                {
                    title: "Hola x3", 
                    description: "Que hay", 
                    publishTime: "12/12/2020", 
                    image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                    videoId: "0qGd0F9eCM3"
                }
            ],
        },
        dispatchV: () => {}
    };

    const providerPropsV2 = {
        state: {
            SearchVideo: "",
            CurrentVideo: {
                title: "Hola", 
                description: "Que hay", 
                publishTime: "12/12/2020", 
                image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                videoId: "0qGd0F9eCMo"
            },
            FavoriteVideos: [
                {
                    title: "Hola x1", 
                    description: "Que hay", 
                    publishTime: "12/12/2020", 
                    image: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg",
                    videoId: "0qGd0F9eCMo"
                }
            ],
        },
        dispatchV: () => {}
    };

    const Pathname = {
        pathname: "/favorites"
    };

    it('Should have a starout component ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV}>
                    <HashRouter>
                        <ConfigContext.Provider value={providerPropsC}>
                            <Player />
                        </ConfigContext.Provider>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );

        expect(getByTestId("StartOut")).toBeInTheDocument();
    });

    it('Should have a StarTwo component ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV2}>
                    <HashRouter>
                        <ConfigContext.Provider value={providerPropsC}>
                            <Player />
                        </ConfigContext.Provider>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );

        expect(getByTestId("StarTwo")).toBeInTheDocument();
    });

    it('Should have a list with components to favorite videos ', () => {

        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV}>
                    <HashRouter {  ...Pathname  } >
                        <ConfigContext.Provider value={providerPropsC}>
                            <Player />
                        </ConfigContext.Provider>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );
        setTimeout(() => {
            expect(getByTestId("ListFavItem")).toBeInTheDocument();
        }, 2000)
    });

    it('Should have a list with 3 components to favorite videos ', () => {

        const { getAllByTestId } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV}>
                    <HashRouter {  ...Pathname  } >
                        <ConfigContext.Provider value={providerPropsC}>
                            <Player />
                        </ConfigContext.Provider>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );
        setTimeout(() => {
            expect(getAllByTestId("ListFavItem").length === 3).toBeTruthy();
        }, 2000);
    });

    it('Should have this style in the component ', () => {

        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV}>
                    <HashRouter {  ...Pathname  } >
                        <ConfigContext.Provider value={providerPropsC}>
                            <Player />
                        </ConfigContext.Provider>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );
        setTimeout(() => {
            expect(getByTestId("ListFavItem")).toHaveStyle({ background: "grey", color: "white" });
        }, 2000);
    });

    it('Should have text "Hola x2" ', () => {

        const { getAllByTestId } = render(
            <StateContext.Provider value={providerPropsS}>
                <VideoContext.Provider value={providerPropsV}>
                    <HashRouter {  ...Pathname  } >
                        <ConfigContext.Provider value={providerPropsC}>
                            <Player />
                        </ConfigContext.Provider>
                    </HashRouter>
                </VideoContext.Provider>
            </StateContext.Provider>
        );
        setTimeout(() => {
            expect(getAllByTestId("ListFavItemTitle")[1]).toHaveTextContent("Hola x2");
        }, 2000);
    });

})


