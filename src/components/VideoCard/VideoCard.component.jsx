/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const VideoCard = ({ title, description, thumbnail, onSelectedVideo, video }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={() => onSelectedVideo(video)}
      key={video.etag}
      className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 xl:w-1/5 2xl:w-1/6 cursor-pointer"
    >
      <article className="overflow-hidden w-full h-full rounded-lg shadow-lg text-justify">
        <img className="block h-auto w-full" src={thumbnail} alt={title} />
        <header className="flex items-center justify-between leading-tight pl-4 pr-4 pt-2">
          <h1 className="text-base">{title}</h1>
        </header>
        <section className="p-4">
          <p className="text-xs font-hairline text-gray-500">{description}</p>
        </section>
      </article>
    </div>
  );
};

export default VideoCard;
