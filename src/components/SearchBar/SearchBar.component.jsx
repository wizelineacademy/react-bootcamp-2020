import React, { useState } from 'react';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useSearch } from '../../providers/Search';
import './SearchBar.styles.css';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setQuery } = useSearch();

  const searchVideo = () => {
    setQuery(searchValue);
  };

  return (
    <div className="search-box">
      <InputBase
        id="searchInput"
        className="search-input"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search video' }}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            searchVideo();
          }
        }}
      />
      <IconButton className="search-btn" aria-label="search video" onClick={searchVideo}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
