import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/auth';
import SignUpPage from '../../../pages/sign-up';

describe('SignUpPage', () => {
  it('Render Sing up Page', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <SignUpPage />
        </AuthProvider>
      </HashRouter>
    );

    expect(screen.getByText('Sign up')).toBeTruthy();
  });

  // it('Create new account', () => {
  //   render(
  //     <HashRouter>
  //       <AuthProvider>
  //         <SignUpPage />
  //       </AuthProvider>
  //     </HashRouter>
  //   );

  //   let nameInput = screen.get('Display Name');
  //   let emailInput = screen.getByText('Email');
  //   let passwordInput = screen.getByText('Password');
  //   let confirmPasswordInput = screen.getByText('Confirm Password');

  //   fireEvent.change(nameInput, { target: { value: 'Test Name' } });
  //   fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
  //   fireEvent.change(passwordInput, { target: { value: '123456' } });
  //   fireEvent.change(confirmPasswordInput, { target: { value: '123456' } });

  //   const createAccountButton = screen.queryByRole('button');
  //   const searchButton = Buttons[0];
  //   act(() => {
  //     fireEvent.click(searchButton);
  //   });
  //   searchInput = screen.getByPlaceholderText('Search');
  //   expect(searchInput.value).toBe('');
  // });
});
