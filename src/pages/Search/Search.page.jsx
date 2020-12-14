import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LayoutFull from '../../components/Layout/LayoutFull.component';
import SearchBar from '../../components/SearchBar';
import LoginStatus from '../../components/LoginStatus';
import VideosList from '../../components/VideosList';

import './Search.styles.css';

function SearchPage() {
  const { searchQuery } = useParams();
  const [searchParam, setSearchParam] = useState(searchQuery);

  return (
    <LayoutFull>
      <SearchBar initSearchQuery={searchParam} onChange={setSearchParam} />
      <LoginStatus />
      <VideosList searchQuery={searchParam} />
    </LayoutFull>
  );
}

export default SearchPage;
