import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import LoginButton from '../../components/LoginButton/LoginButton';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';

describe("<VideoCard/> with false",()=>{
    
    test("<LogginButton/> render in the DOM", () => {
        const setUserLoggedMock = jest.fn();
        const mockValue = {
            userLogged : {
                userStatus: false,
                user: ""
            },
            setUserLogged : setUserLoggedMock
        }

        render(
        <Router>
            <PageContext.Provider value={mockValue}>
                <LoginButton />
            </PageContext.Provider>
        </Router>
        );
        expect(screen.getByText("Log In")).toBeInTheDocument();
    });

    test("<LogginButton/> render in the DOM with true", () => {
        const setUserLoggedMock = jest.fn();
        const mockValue = {
            userLogged : {
                userStatus: true,
                user: ""
            },
            setUserLogged : setUserLoggedMock
        }

        render(
        <Router>
            <PageContext.Provider value={mockValue}>
                <LoginButton />
            </PageContext.Provider>
        </Router>
        );
        expect(screen.getByText("Log Out")).toBeInTheDocument();
    });

    test('onclick event',()=>{
        const setUserLoggedMock = jest.fn();
        const mockValue = {
            userLogged : {
                userStatus: false,
                user: ""
            },
        setUserLogged : setUserLoggedMock
    }
        const param = {
            userStatus: false,
            user: ""
          }
        render(
            <Router>
                <PageContext.Provider value={mockValue}>
                    <LoginButton />
                </PageContext.Provider>
            </Router>
        );
        const LogginButton = screen.getByText("Log In");
        fireEvent.click(LogginButton)
        expect(setUserLoggedMock).toBeCalledWith(param);
    });


});