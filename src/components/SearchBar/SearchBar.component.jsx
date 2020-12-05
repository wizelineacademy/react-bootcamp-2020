import React from 'react';
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.styles.css';

export default function SearchBar() {
  return (
    <div className="search-box">
      <InputBase
        className="search-input"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <Button className="search-btn"><SearchIcon/></Button>
    </div>
  )
}
