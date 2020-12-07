import React, { useContext, useEffect } from 'react';

import VideoCardLarge from '../VideoCardLarge/VideoCardLarge.componenet';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import { LargeCardGrid, SmallCardGrid } from './VideoCardGrid.style';
import VideoSearchContext from '../../state/VideoSearchContext';

// import searchResultMocked from '../../utils/searchResultMocked.json';

const { REACT_APP_API_KEY } = process.env;
const URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=US&order=relevance&maxResults=15&type=video';

function VideoCardGrid() {
  const [searchResultList, setSearchResultList] = React.useState([]);
  const [erroronRequest, setErrorOnRequest] = React.useState(false);
  // const [searchResultList, setSearchResultList] = React.useState(
  //   searchResultMocked.items
  // );
  const { query } = useContext(VideoSearchContext);
  console.log(query);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(`${URL}&key=${REACT_APP_API_KEY}&q=${query}`);
        if (response.ok === false) setErrorOnRequest(true);
        else {
          const data = await response.json();
          console.log(data.items);
          setSearchResultList(data.items);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchVideos();
  }, [query]);
  const largeElements = searchResultList.slice(0, 3);
  const smallElements = searchResultList.slice(3);

  return (
    <>
      {!erroronRequest ? (
        <>
          <LargeCardGrid>
            {largeElements.map((item) => {
              return <VideoCardLarge searchItem={item} />;
            })}
          </LargeCardGrid>
          <SmallCardGrid>
            {smallElements.map((item) => {
              return <VideoCardSmall searchItem={item} />;
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
