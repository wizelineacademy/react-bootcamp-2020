import React from'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import VideoItem from './';
import { ConfigState, ConfigContext } from '../../utils/ConfigState';
import { VideoState, VideoContext } from '../../utils/VideoState';

afterEach(cleanup);


const videoInfo = { 
        title: "Hola", 
        description: "Que hay", 
        publishTime: "12/12/2020", 
        thumbnails: { 
            medium: { url: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg" } 
        } 
    };
const videoID = { videoId: "0qGd0F9eCMo" }; 
const viewVideo = () => {};


describe('Should have some component', () => {
    
    it('Should have a "CardVideo" ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('CardVideo')).toBeInTheDocument();
    });

    it('Should have a "Img" ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('Img')).toBeInTheDocument();
    });

    it('Img should have a background image ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('Img')).toHaveStyle({backgroundImage: "https://i.ytimg.com/vi/0qGd0F9eCMo/mqdefault.jpg" })
    });

    it('Should have a "InfoCont" ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('InfoCont')).toBeInTheDocument();
    });

    it('InfoContainer should have background white ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('InfoCont')).toHaveStyle({background: "white" })
    });

    it('Should have a text "Hola" ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('Title')).toHaveTextContent("Hola");
    });

    it('Title should have text color black ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('Title')).toHaveStyle({ color: "black" });
    });

    it('Should have a text "Que hay" ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <VideoState>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoState>
            </ConfigState>
        );
        expect(getByTestId('Description')).toHaveTextContent("Que hay");
    });

});

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

    const providerPropsV = {
        state: {
            SearchVideo: "",
            CurrentVideo: {},
            FavoriteVideos: [],
        },
        dispatchV: () => {}
    }

    it('InfoContainer should have background dark ', () => {
        const { getByTestId } = render(
            <ConfigContext.Provider value={providerPropsC}>
                <VideoContext.Provider value={providerPropsV}>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoContext.Provider>
            </ConfigContext.Provider>
        );
        expect(getByTestId('InfoCont')).toHaveStyle({ background: "#494A4A" })
    });

    it('Title should have text color white ', () => {
        const { getByTestId } = render(
            <ConfigContext.Provider value={providerPropsC}>
                <VideoContext.Provider value={providerPropsV}>
                    <VideoItem videoInfo={videoInfo} videoID={videoID} viewVideo={viewVideo} />
                </VideoContext.Provider>
            </ConfigContext.Provider>
        );
        expect(getByTestId('Title')).toHaveStyle({ color: "white" });
    });

})


