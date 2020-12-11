import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'styled-components';
import {
  NavIconContainer,
  NavListItem,
  NavLinkContainer,
} from './styles/NavigationLink.styles';

const NavigationLink = ({ action, icon, children, show = true }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {show ? (
        <NavListItem role="listitem" theme={theme} onClick={action}>
          <NavLinkContainer>{children}</NavLinkContainer>
          <NavIconContainer>
            {icon ? <FontAwesomeIcon icon={icon} /> : null}
          </NavIconContainer>
        </NavListItem>
      ) : null}
    </>
  );
};

export default NavigationLink;
