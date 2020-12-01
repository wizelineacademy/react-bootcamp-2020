import React, { useContext } from 'react';
import './Navbar.styles.css';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import { VideoContext } from '../../providers/Video';

const NavBarHeader = styled.header`
  display: flex;
  align-items: center;
  background: #1c5476;
  color: white;
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
`;

const NavBarItem = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
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
  background-color: #7698ac;
  border-radius: 8px;
  box-shadow: 0 4px 22px #7698ac, 0 0 0 10px #ffffffeb;
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

function NavBar() {
  const history = useHistory();
  const { searchTerm, setSearchTerm, fetchVideos } = useContext(VideoContext);

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

  return (
    <NavBarHeader>
      <NavBarTitle>Hotdog</NavBarTitle>
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
      <NavBarItem>Darkmode</NavBarItem>
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
