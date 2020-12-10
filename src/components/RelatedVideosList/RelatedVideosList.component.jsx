import React from 'react';

import RelatedVideo from '../RelatedVideo';
import './RelatedVideosList.style.css';
import relatedVideoResultMocked from '../../utils/relatedVideoResultMocked.json';

function RelatedVideosList() {
  return (
    <>
      <p className="header">Related videos</p>
      {relatedVideoResultMocked.items.map((video) => {
        return <RelatedVideo video={video} ley={video.id} />;
      })}
    </>
  );
}

export default RelatedVideosList;
