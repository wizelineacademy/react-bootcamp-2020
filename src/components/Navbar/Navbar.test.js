import React from'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Navbar from './';
import { State, StateContext } from '../../utils/State';
import { ConfigState, ConfigContext } from '../../utils/ConfigState';
import { VideoState, VideoContext } from '../../utils/VideoState';


afterEach(cleanup);

describe('Should have some component by default', () => {

    it('Should have a Navbar ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('NavBar')).toBeInTheDocument();
    });

    it('Navbar should have this style ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('NavBar')).toHaveStyle({ background: "#C7E1F7" });
    });

    it('Should have text "Home" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('ButtonHome')).toHaveTextContent('Home');
    });
    
    it('Should have text "Wizeline" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('InputNavBar')).toHaveValue('Wizeline');
    });

    it('Switch should be "false" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('SwitchNavBar')).not.toBeChecked();
    });

    it('Should have text "Dark mode" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('DarkMode')).toHaveTextContent("Dark mode");
    });

    it('Dark mode should have this style ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('DarkMode')).toHaveStyle({ color: "grey" });
    });

    it('Login icon should be there', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('LoginIcon')).toBeInTheDocument();
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
            SearchVideo: "Oracle",
            CurrentVideo: {},
            FavoriteVideos: [],
        },
        dispatchV: () => {}
    }

    it('Navbar should have this style ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <VideoContext.Provider value={providerPropsV}>
                        <Navbar/>
                    </VideoContext.Provider>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('NavBar')).toHaveStyle({ background: "#0E65AD" });
    });
    
    it('Should have text "Favorites" ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <VideoContext.Provider value={providerPropsV}>
                        <Navbar/>
                    </VideoContext.Provider>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('ButtonFavorites')).toHaveTextContent('Favorites');
    });

    it('Should have text "Oracle" ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <VideoContext.Provider value={providerPropsV}>
                        <Navbar/>
                    </VideoContext.Provider>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('InputNavBar')).toHaveValue('Oracle');
    });

    it('Dark mode should have this style ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <VideoContext.Provider value={providerPropsV}>
                        <Navbar/>
                    </VideoContext.Provider>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('DarkMode')).toHaveStyle({ color: "white" });
    });

    it('Switch should be "true" ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <VideoContext.Provider value={providerPropsV}>
                        <Navbar/>
                    </VideoContext.Provider>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('SwitchNavBar')).toBeChecked();
    });
    
    it('Login icon should be there', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <VideoContext.Provider value={providerPropsV}>
                        <Navbar/>
                    </VideoContext.Provider>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('LogoutIcon')).toBeInTheDocument();
    });

});

describe('Test some actions', () => {

    it('Should have text "Hello" when change value ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Navbar/>
                    </VideoState>
                </ConfigState>
            </State>
        );

        fireEvent.change(getByTestId('InputNavBar'), { target: { value: "Hello" } })

        expect(getByTestId('InputNavBar')).toHaveValue('Hello');
    });
 
});





