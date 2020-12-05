import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutFull from '../../components/Layout/LayoutFull.component';
import VideosList from '../../components/VideosList/VideosList.component';

import './Search.styles.css';

function SearchPage() {
  // const [searchQuery, setSearchQuery] = React.useState('');
  const { searchQuery } = useParams();
  return (
    <LayoutFull>
      <p>{searchQuery}</p>
      <VideosList searchQuery={searchQuery} />
    </LayoutFull>
  );
}

export default SearchPage;
