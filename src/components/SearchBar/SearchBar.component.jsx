import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';

import './SearchBar.styles.css';

export default function SearchBar({ initSearchQuery, onChange, homepage }) {
  const [searchQuery, setSearchQuery] = useState(initSearchQuery);
  // eslint-disable-next-line prefer-const
  let history = useHistory();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const triggerChange = () => {
    if (searchQuery) {
      onChange(searchQuery);
      const searchRedirect = `/search/${searchQuery}`;
      history.push(searchRedirect);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerChange();
    }
  };

  let InputSearchBar;
  if (homepage) {
    InputSearchBar = (
      <div className="search">
        <input
          type="text"
          className="full_search_input"
          placeholder="eg. React Tutorials"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  } else {
    InputSearchBar = (
      <div className="search">
        <input
          type="text"
          className="search_input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }

  return InputSearchBar;
}
