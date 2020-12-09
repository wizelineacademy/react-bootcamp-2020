import React, { useContext } from 'react';

import styled from 'styled-components';
import { VideoContext } from '../../providers/Video';

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

function SearchBox() {
  const { searchTerm, setSearchTerm, fetchVideos } = useContext(VideoContext);

  const handleChangeSearchInput = (value) => {
    setSearchTerm(value);
  };

  const handleClickSearch = () => {
    fetchVideos();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      fetchVideos();
    }
  };

  return (
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
  );
}

export default SearchBox;
