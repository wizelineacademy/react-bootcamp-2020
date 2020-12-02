import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useVideoContext } from '../../VideoState/Provider';
import ThemeToggle from '../ThemeToggle';

import './Navbar.styles.css';

const NavBarParent = styled.div`
  height: auto;
  display: flex;
  padding: 15px;
  border-bottom: solid 1px #f1f1f1;
`;
const SearchBar = styled.div`
  margin-left: 14px;
  display: flex;
  width: 100%;
`;

const InputSearch = styled.input`
  margin-left: 14px;
  font-size: 16px;
  border: none;
  border-width: 0;
  box-shadow: none;
  outline: 0;
  width: 90%;
  background-color: transparent;
  color: ${(props) => props.theme.text};
`;

function NavBar() {
  const [search, setSearch] = useState('Wizeline');
  const { fetchVideos } = useVideoContext();

  function onChange(e) {
    setSearch(e.target.value.trim());
  }
  function onkeyDown(e) {
    if (e.key === 'Enter') {
      fetchVideos(search);
    }
  }
  useEffect(() => {
    fetchVideos(search);
  }, []);

  return (
    <>
      <NavBarParent>
        <SearchBar>
          <FontAwesomeIcon icon={faSearch} />
          <InputSearch
            type="text"
            placeholder="Search your favorite videos..."
            onChange={onChange}
            onKeyDown={onkeyDown}
            value={search}
          />
        </SearchBar>
        <ThemeToggle/>
      </NavBarParent>
    </>
  );
}

export default NavBar;
