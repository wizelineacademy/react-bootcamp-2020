import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../Login';
import AuthProvider from '../../providers/Auth';

describe("Login",()=>{


   it("renders title",()=>{
      const loginTitle="Welcome back!";
      render(<AuthProvider><LoginPage></LoginPage></AuthProvider>);
      const title=screen.getByRole("heading");
      expect(title.innerHTML).toBe(loginTitle);
   })

  
})