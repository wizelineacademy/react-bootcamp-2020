import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from '../../components/LoginForm/LoginForm';
import React from 'react';
import PageContext from '../../providers/Context/PageContext';

// let container;
// Enzyme.configure({ adapter: new Adapter() });
// const setState = jest.isMockFunction();
// const useStateSpy = jest.spyOn(React,'useState');
// useStateSpy.mockImplementation(()=> [init,setState]);


const setUserLoggedMock = jest.fn();
const mockValue = {
    userLogged : {},
    setUserLogged : setUserLoggedMock
}

describe('LoginForm Test',()=>{

    test("onChange event username input",()=> {
        
      render(
            <Router>
                <PageContext.Provider value={mockValue}>
                    <LoginForm/>
                </PageContext.Provider>
            </Router>

        );
        const input = screen.getByRole('user');
        fireEvent.change(input, { target: { value: 'cesar' } });
        expect(input.value).toEqual('cesar');
       
    });

    test("onChange event password input",()=> {
        
        render(
            <Router>
                <PageContext.Provider value={mockValue}>
                    <LoginForm/>
                </PageContext.Provider>
            </Router>
        );
        const input2 = screen.getByRole('pass');
        fireEvent.change(input2, { target: { value: 'perro' } });
        expect(input2.value).toEqual('perro');
       
    });

    test("onClick login button",()=> {
        const params = {
            userStatus: true,
            user: 'cesar',
            password: '1234'
          } 
        
        render(
            <Router>
                <PageContext.Provider value={mockValue}>
                    <LoginForm/>
                </PageContext.Provider>
            </Router>
        );
        const input1 = screen.getByRole('user');
        const input2 = screen.getByRole('pass');
        const button = screen.getByRole('button');
        fireEvent.change(input1, { target: { value: 'cesar' } })
        fireEvent.change(input2, { target: { value: '1234' } })
        fireEvent.click(button)
        expect(setUserLoggedMock).toBeCalledWith(params);
       
    });

});