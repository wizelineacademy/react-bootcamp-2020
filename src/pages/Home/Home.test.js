import React from'react';
import { render, cleanup } from '@testing-library/react';
import Home from './';
import { ConfigState, ConfigContext } from '../../utils/ConfigState';

afterEach(cleanup);

describe('Should have some components', () => {
    
    it('Should have home container ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <Home/>
            </ConfigState>
        );
        expect(getByTestId('HomeCont')).toBeInTheDocument();
    }); 

    it('Should have background color "white" ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <Home/>
            </ConfigState>
        );
        expect(getByTestId('HomeCont')).toHaveStyle({ background: "white" });
    }); 

    it('Should have video item ', () => {
        const { getByTestId } = render(
            <ConfigState>
                <Home/>
            </ConfigState>
        );
        setTimeout(() => {
            expect(getByTestId('CardVideo')).toBeInTheDocument();
        }, 2000);
    }); 

    it('Should have 20 video items ', () => {
        const { getAllByTestId } = render(
            <ConfigState>
                <Home/>
            </ConfigState>
        );
        setTimeout(() => {
            expect(getAllByTestId('CardVideo').length === 20).toBeTruthy();
        }, 2000);
    });

});

describe('Changing state', () => {
    

    it('Should have 20 video items ', () => {

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

        const { getByTestId } = render(
            <ConfigContext.Provider value={providerPropsC}>
                <Home/>
            </ConfigContext.Provider>
        );
        expect(getByTestId('HomeCont')).toHaveStyle({ background: "#494A4A" });
    });

})


