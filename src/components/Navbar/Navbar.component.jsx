import React, { useContext } from 'react';
import './Navbar.styles.css';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import { VideoContext } from '../../providers/Video';
import { ThemeContext } from '../../providers/Theme';

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

const NavBarSearchBox = styled.div`
  margin-right: auto;
`;

const Cover = styled.div`
  top: 50%;
  left: 0;
  right: 0;
  width: 400px;
  padding: 7px;
  background-color: ${(props) => props.theme.variant};
  border-radius: 8px;
  box-shadow: 0 4px 22px ${(props) => props.theme.variant}, 0 0 0 10px #ffffffeb;
  transform: scale(0.6);
`;

const TB = styled.div`
  display: table;
  width: 100%;
`;

const TD = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const SearchInput = styled.input`
width: 100%;
height: 50px;
font-size: 30px;
line-height: 1;
border: none;
color: #fff;
font-family: Nunito;
padding: 0;
margin: 0;
border: 0;
background-color: transparent;
&:focus {
  outline: none;
}
&:placeholder {
  color: #1c5476;
`;

const SearchButton = styled.button`
  color: #fff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  position: relative;
  display: block;
  width: 84px;
  height: 55px;
  cursor: pointer;
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
  const { searchTerm, setSearchTerm, fetchVideos } = useContext(VideoContext);
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const handleChangeSearchInput = (value) => {
    setSearchTerm(value);
  };

  const handleClickSearch = () => {
    fetchVideos();
  };

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      fetchVideos();
    }
  };

  return (
    <NavBarHeader>
      <NavBarTitle>Academy project</NavBarTitle>
      <NavBarSearchBox>
        <Cover id="cover">
          <TB>
            <TD>
              <SearchInput
                type="text"
                placeholder="Search"
                required
                value={searchTerm}
                onChange={(event) => handleChangeSearchInput(event.target.value)}
                onKeyPress={(event) => handleKeyPress(event)}
              />
            </TD>
            <TD id="s-cover">
              <SearchButton type="submit" onClick={handleClickSearch}>
                <div id="s-circle" />
                <span />
              </SearchButton>
            </TD>
          </TB>
        </Cover>
      </NavBarSearchBox>
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
