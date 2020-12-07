import React, { useRef, useState, useEffect } from 'react';

import SearchInput from '../../components/SearchInput/SearchInput.component';
import CardList from '../../components/CardList/CardList.component';
import useSearchVideos from '../../utils/hooks/useSearchVideos';

import './Search.styles.css';

function SearchPage() {
  const sectionRef = useRef(null);
  const [currentSearch, setCurrentSearch] = useState('wizeline');
  const [videos, getVideos] = useSearchVideos();

  useEffect(() => {
    getVideos(currentSearch);
  }, [currentSearch, getVideos]);

  // console.log('home', videos);

  return (
    <>
      <SearchInput searchText={currentSearch} onChange={setCurrentSearch} />
      <section className="homepage" ref={sectionRef}>
        {videos && <CardList videos={videos} />}
      </section>
    </>
  );
}

export default SearchPage;
