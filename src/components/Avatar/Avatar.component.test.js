import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Avatar from './Avatar.component'
import AuthProvider from '../../AuthContext'
import { MemoryRouter } from 'react-router-dom';


describe('<Avatar/>', () =>{
    it('renders correctly Avatar if the User is logged in', ()=> {
        render(<AuthProvider><Avatar/></AuthProvider>)
    })

    it('Renders the button Login', ()=>{
        const container= render(<AuthProvider><Avatar/></AuthProvider>)
        expect(container.queryByText('Login')).toBeVisible()

    })


})

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('To Login Page', () => {
  it('Redirects login page', () => {
    const { getByRole } = render(
      <AuthProvider>
      <MemoryRouter>
        <Avatar />
      </MemoryRouter>
      </AuthProvider>  
    );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/login');
  });
});