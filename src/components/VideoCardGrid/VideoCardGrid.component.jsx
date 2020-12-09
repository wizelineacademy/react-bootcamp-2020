import React from 'react';
// import React, { useContext, useEffect } from 'react';

import VideoCardLarge from '../VideoCardLarge/VideoCardLarge.componenet';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import { LargeCardGrid, SmallCardGrid } from './VideoCardGrid.style';

// import VideoSearchContext from '../../state/VideoSearchContext';
// import { useYoutubeSearch } from '../../utils/hooks/useYoutubeSearch';
import VideoSelectedContext from '../../state/VideoSelectedContext';

// --- DEV mocked setup --- ///
import searchResultMocked from '../../utils/searchResultMocked.json';
// --- End of DEV mocked setup --- ///

function VideoCardGrid() {
  // const { query } = useContext(VideoSearchContext);
  // const [queryFromContext, setQueryFromContext] = React.useState('');
  const [selectedVideo, setSelectedVideo] = React.useState({});
  // --- DEV mocked setup --- ///
  // eslint-disable-next-line no-unused-vars
  const [searchResultList, setSearchResultList] = React.useState(
    searchResultMocked.items
  );
  const largeElements = searchResultList.slice(0, 3);
  const smallElements = searchResultList.slice(3);
  const isRequestSuccessful = true;
  // --- End of DEV mocked setup --- ///

  // useEffect(() => {
  //   function updateQueryState(newQuery) {
  //     setQueryFromContext(newQuery);
  //   }
  //   updateQueryState(query);
  // }, [query]);

  // const { searchListItems, isRequestSuccessful } = useYoutubeSearch(queryFromContext);

  // const largeElements = searchListItems.slice(0, 3);
  // const smallElements = searchListItems.slice(3);

  const updateSelectedVideo = (newVideo) => {
    console.log(newVideo);
    setSelectedVideo(newVideo);
  };

  return (
    <>
      {isRequestSuccessful ? (
        <>
          <VideoSelectedContext.Provider
            value={{ video: selectedVideo, setVideoFn: updateSelectedVideo }}
          >
            <LargeCardGrid>
              {largeElements.map((item) => {
                return <VideoCardLarge searchItem={item} key={item.id.videoId} />;
              })}
            </LargeCardGrid>
            <SmallCardGrid>
              {smallElements.map((item) => {
                return <VideoCardSmall searchItem={item} key={item.id.videoId} />;
              })}
            </SmallCardGrid>
          </VideoSelectedContext.Provider>
        </>
      ) : (
        <>
          <h1>Sorry for the inconvenience :c</h1>
          <h2>Error retrieving Youtube videos</h2>
        </>
      )}
    </>
  );
}

export default VideoCardGrid;
