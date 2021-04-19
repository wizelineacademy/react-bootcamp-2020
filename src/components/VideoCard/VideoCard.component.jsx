/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { VideoContext } from '../../context/context';

const VideoCard = ({ id, title, description, thumbnail, video }) => {
  const { dispatch } = useContext(VideoContext);
  const onSelectedVideo = () => {
    dispatch({ type: '@set/current_video', payload: video });
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={() => onSelectedVideo(video)}
      key={id}
      className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 xl:w-1/5 2xl:w-1/6 cursor-pointer sm:px-4 sm:my-4"
    >
      <article className="overflow-hidden w-full h-full rounded-lg shadow-lg text-justify dark:border-gray-600 dark:bg-gray-600">
        <img className="block h-auto w-full" src={thumbnail} alt={title} />
        <header className="flex items-center justify-between leading-tight pl-4 pr-4 pt-2">
          <h1 className="text-base">{title}</h1>
        </header>
        <section className="p-4">
          <p className="text-xs font-hairline dark:text-gray-300 text-gray-500">
            {description}
          </p>
        </section>
      </article>
    </div>
  );
};

export default VideoCard;
