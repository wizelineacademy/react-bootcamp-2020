import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AddToFavorites from '../AddToFavorites/index';

const VideoDetail = ({ video }) => {
  const { isAuthenticated } = useAuth0();
  if (!video) {
    return <div>Loading...</div>;
  }

  const { id, snippet } = video;

  const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;

  return (
    <div className="col-start-1 col-end-6 mx-0.5 mt-0.5">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={videoSrc}
          title={snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-flow-col md:grid-cols-3 md:gap-4">
        <div className="md:col-span-2 mb-2">
          <h4 className="ml-2 mt-2 md:m-4 sm:m-2 sm:text-base md:text-lg">
            {snippet.title}
          </h4>
        </div>
        <div className="md:mt-2 sm:px-8 sm:mx-auto">
          {isAuthenticated && <AddToFavorites video={video} />}
        </div>
      </div>
      <div className="ml-2 mt-2 mr-2 md:m-4 text-sm dark:text-white text-justify font-hairline text-gray-500">
        {snippet.description}
      </div>
    </div>
  );
};

export default VideoDetail;
