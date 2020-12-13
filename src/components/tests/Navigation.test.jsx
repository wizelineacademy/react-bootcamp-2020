import React,{useEffect} from 'react';
import { render, screen } from '@testing-library/react';
import AuthProvider,{useAuth} from '../../providers/Auth';
import Navigation from '../Navigation/Navigation.component';
import UserData from '../../providers/AppData';


describe("Navigation",()=>{


   it("it renders nav list",()=>{
      render(
        <AuthProvider>
         <UserData>
            <Navigation/>
         </UserData>
         </AuthProvider>
      )

      const navigation= screen.getByRole("list");
      expect(navigation).toBeTruthy()

   })

   it('it renders secret buttons', () => {

      const TestComponent = ({ children }) => {
        const { login } = useAuth();
        useEffect(() => {
          login();
        }, [login])
        return (<div>{children}</div>);
  
      }
       render(
          <UserData>
            <AuthProvider>
              <TestComponent>
                <Navigation/>
              </TestComponent>
            </AuthProvider>
          </UserData>
      );
  
  
      const count= screen.getByText("Logout");
      expect(count).toBeTruthy();
    });
})