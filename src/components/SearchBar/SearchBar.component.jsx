import React, { useContext } from 'react';
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.styles.css';
import SearchContext from '../../contexts/search';

export default function SearchBar() {
  const { setSearch } = useContext(SearchContext);

  return (
    <div className="search-box">
      <InputBase
        id="searchInput"
        className="search-input"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <Button
        className="search-btn"
        onClick={() => setSearch(document.getElementById('searchInput').value)}
      >
        <SearchIcon />
      </Button>
    </div>
  );
}
