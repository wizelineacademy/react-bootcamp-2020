import React, { useEffect } from 'react';

import RelatedVideo from '../RelatedVideo';
import './RelatedVideosList.style.css';

// import { useRelatedVideo } from '../../utils/hooks/useRelatedVideos';

// --- DEV mocked setup --- ///
import relatedVideoResultMocked from '../../utils/relatedVideoResultMocked.json';
// --- End of DEV mocked setup --- ///

function RelatedVideosList({ videoId }) {
  // --- DEV mocked setup --- ///
  const isRequestSuccessful = true;
  const isLoading = false;
  const searchRelatedItems = relatedVideoResultMocked.items;
  console.log(videoId);
  // --- End of DEV mocked setup --- ///

  // --- Prod code ---//
  // const { searchRelatedItems, isRequestSuccessful, isLoading } = useRelatedVideo(videoId);
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
