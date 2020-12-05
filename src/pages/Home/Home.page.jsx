import React, { useState } from 'react';
import SearchContext from '../../contexts/search';
import AppBar from '../../components/AppBar';
import VideoGrid from '../../components/VideoGrid';
import videos from '../../mock';

const initialSearch = '';

export default function HomePage() {
  const [search, setSearch] = useState(initialSearch);

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <AppBar />
        <VideoGrid
          videos={videos.filter((v) => {
            return v.title.includes(search);
          })}
        />
      </SearchContext.Provider>
    </>
  );
}
