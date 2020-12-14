import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormLoggin from '../../pages/Login/FormLogging';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';
import { BrowserRouter as Router } from 'react-router-dom';

const setUserLoggedMock = jest.fn();
const mockValue = {
    userLogged : {},
    setUserLogged : setUserLoggedMock
}

describe('Loggin form page test',()=>{
    
    test('render in Dom loggin form',()=>{
        render(
        <Router>
            <PageContext.Provider value={mockValue}>
                <FormLoggin />
            </PageContext.Provider>
        </Router>

          
        ); 
    });

    expect(<FormLoggin />).toBeTruthy();


});