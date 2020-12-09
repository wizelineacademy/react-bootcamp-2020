import React from 'react';
import { useHistory } from 'react-router-dom';
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useSearch } from '../../providers/Search';
import './SearchBar.styles.css';

export default function SearchBar() {
  const { setQuery } = useSearch();
  const history = useHistory();

  const searchVideo = () => {
    const q = document.getElementById('searchInput').value;
    setQuery(q);
    history.push(`/?q=${q}`);
  };

  return (
    <div className="search-box">
      <InputBase
        id="searchInput"
        className="search-input"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search video' }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
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
