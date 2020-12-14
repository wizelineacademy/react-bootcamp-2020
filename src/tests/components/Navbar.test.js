import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import PageContext from '../../providers/Context/PageContext';
import React from 'react';

describe('Test Navbar',()=>{
    const setSideBarMock = jest.fn();
    const mockValue = {
        sideBar : false,
        setSideBar : setSideBarMock,
        userLogged : {
            userStatus: false,
            user: ""
        }
    }

    test('render list not logged ',()=>{

     render(
            <Router>
                <PageContext.Provider value={mockValue}>
                    <Navbar />
                </PageContext.Provider>
            </Router>
        );
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    test('render list logged ',()=>{
        mockValue.userLogged.userStatus=true;
        render(
               <Router>
                   <PageContext.Provider value={mockValue}>
                       <Navbar />
                   </PageContext.Provider>
               </Router>
           );
           expect(screen.getByText('Home')).toBeInTheDocument();
           expect(screen.getByText('Favourites')).toBeInTheDocument();
       });

    test('onclick sidebar false',()=>{

        render(
            <Router>
                <PageContext.Provider value={mockValue}>
                    <Navbar />
                </PageContext.Provider>
            </Router>
        );
        const icon = screen.getByRole('showSideBar');
        fireEvent.click(icon)
        expect(setSideBarMock).toBeCalledWith(true);
    });

    test('onclick sidebar true',()=>{
        mockValue.sideBar='true'
        render(
            <Router>
                <PageContext.Provider value={mockValue}>
                    <Navbar />
                </PageContext.Provider>
            </Router>
        );
        const icon = screen.getByRole('showSideBar');
        fireEvent.click(icon)
        expect(setSideBarMock).toBeCalledWith(false);
    });

});