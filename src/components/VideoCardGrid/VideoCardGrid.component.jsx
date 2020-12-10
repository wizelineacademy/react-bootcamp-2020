import React, { useContext, useEffect } from 'react';

import VideoCardLarge from '../VideoCardLarge/VideoCardLarge.componenet';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import { LargeCardGrid, SmallCardGrid } from './VideoCardGrid.style';

import VideoSearchContext from '../../state/VideoSearchContext';
import { useYoutubeSearch } from '../../utils/hooks/useYoutubeSearch';
// import VideoSelectedContext from '../../state/VideoSelectedContext';

function VideoCardGrid() {
  const { query } = useContext(VideoSearchContext);
  const [queryFromContext, setQueryFromContext] = React.useState('Wizeline');
  // const [selectedVideo, setSelectedVideo] = React.useState({});

  useEffect(() => {
    function updateQueryState(newQuery) {
      setQueryFromContext(newQuery);
    }
    updateQueryState(query);
  }, [query]);

  const { searchListItems, isRequestSuccessful } = useYoutubeSearch(queryFromContext);

  const largeElements = searchListItems.slice(0, 3);
  const smallElements = searchListItems.slice(3);

  return (
    <>
      {isRequestSuccessful ? (
        <>
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
