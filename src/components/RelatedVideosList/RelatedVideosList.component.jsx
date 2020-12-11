import React, { useEffect } from 'react';

import RelatedVideo from '../RelatedVideo';
import './RelatedVideosList.style.css';
// --- Prod code ---//
import { useRelatedVideo } from '../../utils/hooks/useRelatedVideos';
// --- End Prod code ---//
import VideoSelectedContext from '../../state/VideoSelectedContext';

// --- DEV mocked setup --- ///
// import relatedVideoResultMocked from '../../utils/relatedVideoResultMocked.json';
// --- End of DEV mocked setup --- ///

function RelatedVideosList() {
  // --- DEV mocked setup --- ///
  // const isRequestSuccessful = true;
  // const isLoading = false;
  // const searchRelatedItems = relatedVideoResultMocked.items;
  // --- End of DEV mocked setup --- ///

  // experiment - use context instead of passed on prop
  const { videoId } = React.useContext(VideoSelectedContext);
  console.log(videoId);

  // --- Prod code ---//
  const { searchRelatedItems, isRequestSuccessful, isLoading } = useRelatedVideo(videoId);
  // --- End Prod code ---//
  const [relatedVideoList, setRelatedVideoList] = React.useState([]);
  useEffect(() => {
    function updateRelatedVideoList(list) {
      setRelatedVideoList(list);
    }
    updateRelatedVideoList(searchRelatedItems);
  });

  const renderRelatedVideoList = () => {
    if (isRequestSuccessful)
      return relatedVideoList.map((video) => {
        return <RelatedVideo video={video} key={video.id.videoId} />;
      });
    return <h1>Unable to retrieve related video list</h1>;
  };

  return (
    <>
      <p className="header">Related videos</p>
      {!isLoading ? renderRelatedVideoList() : <h1>Loading...</h1>}
    </>
  );
}

export default RelatedVideosList;
