import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavIconContainer, NavListItem, NavLinkContainer } from "./styles/NavigationLink.styles";
import { ThemeContext } from "styled-components";

const NavigationLink = ({ action, icon, children, show = true }) => {

   const theme = useContext(ThemeContext);


   return (
      <>
         {show
            ?

            <NavListItem theme={theme} onClick={action}>

               <NavLinkContainer>
                  {children}
               </NavLinkContainer>
               <NavIconContainer>
                  <FontAwesomeIcon icon={icon} />

               </NavIconContainer>

            </NavListItem>
            : null}


      </>

   );
}

export default NavigationLink;
