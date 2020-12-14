import React, { useEffect } from 'react';

import RelatedVideo from '../RelatedVideo';
import './RelatedVideosList.style.css';
import { useRelatedVideo } from '../../utils/hooks/useRelatedVideos';
import VideoSelectedContext from '../../state/VideoSelectedContext';

function RelatedVideosList() {
  const { videoId } = React.useContext(VideoSelectedContext);
  const { searchRelatedItems, isRequestSuccessful, isLoading } = useRelatedVideo(videoId);
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
