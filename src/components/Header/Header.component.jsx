import React from 'react';
import logoDark from '../../images/logoDark.png';
import logoLight from '../../images/logoLight.png';
import { Container, Logo, MenuIcon, IconContainer } from './Header.styles';
import Search from './Search';
import Buttons from './Buttons';
import { useAuth } from '../../providers/Auth';

function Header() {
  const { state, setState } = useAuth();

  return (
    <>
      <Container>
        <Logo>
          <IconContainer onClick={() => setState({ ...state, sidenav: !state.sidenav })}>
            <MenuIcon />
          </IconContainer>
          <img src={state.theme === 'light' ? logoLight : logoDark} alt="Logo" />
        </Logo>
        <Search />
        <Buttons />
      </Container>
    </>
  );
}

export default Header;
