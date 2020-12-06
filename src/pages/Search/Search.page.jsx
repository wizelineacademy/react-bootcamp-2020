import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutFull from '../../components/Layout/LayoutFull.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import LoginStatus from '../../components/LoginStatus/LoginStatus.compopnent';
import VideosList from '../../components/VideosList/VideosList.component';

import './Search.styles.css';

function SearchPage() {
  // const [searchQuery, setSearchQuery] = React.useState('');
  const { searchQuery } = useParams();
  console.log(searchQuery);
  const [searchParam, setSearchParam] = React.useState(searchQuery);

  return (
    <LayoutFull>
      <SearchBar initSearchQuery={searchParam} onChange={setSearchParam} />
      <LoginStatus />
      <VideosList searchQuery={searchParam} />
    </LayoutFull>
  );
}

export default SearchPage;
