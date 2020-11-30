import React, { useContext } from 'react';
import { NavigationBlock } from './Navigation.styles';
import { useAppDataContext } from '../../providers/AppData';
import { ThemeContext } from "styled-components";
import ProfileInformation from "../ProfileInformation";
import NavigationLink from "../NavigationLink";
import { useAuth } from "../../providers/Auth";
import actions from "../../state/actions"


import { faHome, faStar, faKey } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router';


const Navigation = () => {
   const { state,dispatch } = useAppDataContext();
   const theme = useContext(ThemeContext);
   const { authenticated,logout } = useAuth();
   const history = useHistory();



   return (

      <NavigationBlock theme={theme} show={state.navigationOpen} >
         <ProfileInformation />
         <ul className="navlist">
            <NavigationLink action={() => history.push("/")} icon={faHome}>
               Home
          </NavigationLink>
            <NavigationLink show={authenticated} action={() => history.push("/favorites")} icon={faStar}>
               Favorites
          </NavigationLink>

            <NavigationLink show={!authenticated} action={() => history.push("/login")} icon={faKey}>
               Login
          </NavigationLink>
          <NavigationLink show={authenticated}
           action={() => {
            dispatch({type:actions.SET_USER,payload:null})
            logout()
          }} icon={faKey}>
               Logout
          </NavigationLink>
         </ul>
      </NavigationBlock>

   );
}

export default Navigation;
