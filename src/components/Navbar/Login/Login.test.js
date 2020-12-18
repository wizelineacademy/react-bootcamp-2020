import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Login from './';
import { State, StateContext } from '../../../utils/State';
import { ConfigState, ConfigContext } from '../../../utils/ConfigState';
import { VideoState, VideoContext } from '../../../utils/VideoState';

afterEach(cleanup);

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
})

describe('Some elements should be render', () => {
    
    it(' Username should equal to "" ', () => {
        const { getByTestId } = render( 
            <State>
                <ConfigState>
                    <VideoState>
                        <Login visible /> 
                    </VideoState>
                </ConfigState>
            </State>
        );
        expect(getByTestId('UserInput')).toHaveDisplayValue("");
    });

    it('Username should equal to "User" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Login visible /> 
                    </VideoState>
                </ConfigState>
            </State>
        );

        fireEvent.change(getByTestId('UserInput'), { target: { value: "User" } })

        expect(getByTestId('UserInput')).toHaveValue('User');
    });
    
    it(' Password should equal to "" ', () => {
        const { getByTestId } = render( 
            <State>
                <ConfigState>
                    <Login visible /> 
                </ConfigState>
            </State>
        );
        expect(getByTestId('PassInput')).toHaveDisplayValue("");
    });

    it('Password should equal to "123" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Login visible /> 
                    </VideoState>
                </ConfigState>
            </State>
        );

        fireEvent.change(getByTestId('PassInput'), { target: { value: "123" } })

        expect(getByTestId('PassInput')).toHaveValue('123');
    });

    it(' Button should have text "Cancel" ', () => {
        const { getByTestId } = render( 
            <State>
                <ConfigState>
                    <Login visible /> 
                </ConfigState>
            </State>
        );
        expect(getByTestId('CancelButton')).toHaveTextContent("Cancel");
    });

    it(' Button should have text "Log In" ', () => {
        const { getByTestId } = render( 
            <State>
                <ConfigState>
                    <Login visible /> 
                </ConfigState>
            </State>
        );
        expect(getByTestId('LoginButton')).toHaveTextContent("Log In");
    });

    it('Login modal should be there', () => {
        const { getByRole } = render(
            <State>
                <ConfigState>
                    <Login visible/> 
                </ConfigState>
            </State>
        );
        expect(getByRole('dialog')).toBeInTheDocument();
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
            Sesion: null,
        },
        dispatchS: () => {}
    };

    it('Cancel button should have this style" ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <Login visible/>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('CancelButton')).toHaveStyle({ background: "grey", color: "white" });
    });

    it('LogIn button should have this style" ', () => {
        const { getByTestId } = render(
            <StateContext.Provider value={providerPropsS} >
                <ConfigContext.Provider value={providerPropsC} >
                    <Login visible/>
                </ConfigContext.Provider>
            </StateContext.Provider>
        );
        expect(getByTestId('LoginButton')).toHaveStyle({ background: "grey", color: "white" });
    });

});

describe('Test some actions', () => {

    it('Username should equal to "User" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Login visible /> 
                    </VideoState>
                </ConfigState>
            </State>
        );

        fireEvent.change(getByTestId('UserInput'), { target: { value: "User" } })

        expect(getByTestId('UserInput')).toHaveValue('User');
    });

    it('Password should equal to "123" ', () => {
        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Login visible /> 
                    </VideoState>
                </ConfigState>
            </State>
        );

        fireEvent.change(getByTestId('PassInput'), { target: { value: "123" } })

        expect(getByTestId('PassInput')).toHaveValue('123');
    });

    it(' Should call one time CancelButton', () => {

        const onClose = jest.fn();

        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Login visible onClose={onClose}/> 
                    </VideoState>
                </ConfigState>
            </State>
        );

        fireEvent.click(getByTestId('CancelButton'))

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it(' Should not call LoginButton', () => {

        const onClose = jest.fn();

        const { getByTestId } = render(
            <State>
                <ConfigState>
                    <VideoState>
                        <Login visible onClose={onClose}/> 
                    </VideoState>
                </ConfigState>
            </State>
        );

        fireEvent.click(getByTestId('LoginButton'))

        expect(onClose).toHaveBeenCalledTimes(0);
    });

});



