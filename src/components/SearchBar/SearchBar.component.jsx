import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';

import './SearchBar.styles.css';

export default function SearchBar({ initSearchQuery, onChange, isHomepage }) {
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

  return (
    <div className={isHomepage ? `search_homepage` : `search`}>
      <input
        type="text"
        className={isHomepage ? `full_search_input` : `search_input`}
        placeholder={isHomepage ? `eg. React Tutorials` : `Search`}
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
