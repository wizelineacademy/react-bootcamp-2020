import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import NavigationLink from '../NavigationLink';

describe("NavigationLink",()=>{


   it("it renders with his name",()=>{
      const name= "home"
      render(
         <NavigationLink>
            {name}
         </NavigationLink>
      )

      const link= screen.getByRole("listitem");
      expect(link).toBeTruthy();
      const linkByName=screen.getByText(name);
      expect(linkByName).toBeTruthy();


   })

   it("it exec his function",()=>{
      const name= "home"
      const action=jest.fn();
      render(
         <NavigationLink action={action}>
            {name}
         </NavigationLink>
      )

     
      const linkByName=screen.getByText(name);
      fireEvent.click(linkByName)
      expect(action).toBeCalledTimes(1);


   })

})