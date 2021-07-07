import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  NavIconContainer,
  NavListItem,
  NavLinkContainer,
} from './styles/NavigationLink.styles';

const NavigationLink = ({ action, icon, children, show = true }) => {

  return (
    <>
      {show ? (
        <NavListItem role="listitem"  onClick={action}>
          <NavLinkContainer>{children}</NavLinkContainer>
          <NavIconContainer>
            {icon ?
              <FontAwesomeIcon icon={icon} />
              : null
            }
          </NavIconContainer>
        </NavListItem>
      ) : null}
    </>
  );
};

export default NavigationLink;
