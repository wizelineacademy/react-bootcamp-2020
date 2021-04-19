import React from 'react';

const VideoDetail = ({ video }) => {
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
      <h4 className="ml-2 m-4 text-lg">{snippet.title}</h4>
      <p className="ml-2 m-4 text-sm font-hairline text-gray-500">
        {snippet.description}
      </p>
    </div>
  );
};

export default VideoDetail;
