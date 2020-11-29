import React from 'react';
import {NavigationBlock} from "./Navigation.styles";
import {useAppDataContext} from "../../providers/AppData";


const Navigation = () => {
   const { state } = useAppDataContext();

   return (
      <NavigationBlock show={state.navigationOpen}>

      </NavigationBlock>
         
   );
}

export default Navigation;
