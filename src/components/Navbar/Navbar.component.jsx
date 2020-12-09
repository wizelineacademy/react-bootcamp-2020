import React from 'react';
import styled from 'styled-components';
import SearchBox from '../SearchBox/SearchBox.component';
import Menu from '../Menu/Menu.component';

const NavBarHeader = styled.header`
  display: flex;
  align-items: center;
  color: white;
  background: ${(props) => props.theme.primary};
  font-family: Helvetica;
  font-weight: 300;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.56);
  padding: 5px;
`;

const NavBarTitle = styled.div`
  font-size: 150%;
  padding: 12px 16px;
  cursor: pointer;
  vertical-align: middle;
  color: ${(props) => props.theme.secondary};
`;

function NavBar() {
  return (
    <NavBarHeader>
      <NavBarTitle>Academy project</NavBarTitle>
      <SearchBox />
      <Menu />
    </NavBarHeader>
  );
}

export default NavBar;
