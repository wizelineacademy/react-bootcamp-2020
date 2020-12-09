import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { ThemeContext } from '../../providers/Theme/LocalTheme.provider';
import SearchBox from '../SearchBox/SearchBox.component';

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

const NavBarItem = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  display: flex;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  margin-top: 4px;
  left: 0;
  width: 42px;
  height: 21px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 16px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const DarkSide = styled.label`
  text-decoration: none;
  font-weight: bold;
  color: white;
`;

function NavBar() {
  const history = useHistory();
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <NavBarHeader>
      <NavBarTitle>Academy project</NavBarTitle>
      <SearchBox />
      <NavBarItem>
        <Link to="/">Home</Link>
      </NavBarItem>
      <NavBarItem>
        <CheckBoxWrapper>
          <CheckBox
            id="checkbox"
            type="checkbox"
            onChange={(event) => handleChangeTheme(event.target.value)}
            checked={isDarkTheme}
          />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
        <DarkSide>{isDarkTheme ? 'Lightside' : 'Darkside'}</DarkSide>
      </NavBarItem>

      {authenticated ? (
        <NavBarItem>
          <Link to="/favorites">Favorites</Link>
        </NavBarItem>
      ) : (
        <></>
      )}
      {authenticated ? (
        <span>
          <Link to="/" onClick={deAuthenticate}>
            logout
          </Link>
        </span>
      ) : (
        <NavBarItem>
          {' '}
          <Link to="/login">Login</Link>
        </NavBarItem>
      )}
    </NavBarHeader>
  );
}

export default NavBar;
