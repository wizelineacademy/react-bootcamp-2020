import React from'react';
import { render, cleanup } from '@testing-library/react';
import Layout from './';
import { ConfigState, ConfigContext } from '../../utils/ConfigState';

afterEach(cleanup);

describe('Should have theme by default', () => {

    it('Should have "light" theme ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <Layout/>
            </ConfigState>
        );
        expect(getByTestId('Layout')).toHaveStyle({ background: "white" });
    });

});

describe('Should have other theme ', () => {

    const providerProps = {
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

    it('Should have "dark" theme ', () => {
        const { getByTestId } = render(
            <ConfigContext.Provider value={providerProps}>
                <Layout/>
            </ConfigContext.Provider>
        );
        expect(getByTestId('Layout')).toHaveStyle({ background: "#494A4A" });
    });

});