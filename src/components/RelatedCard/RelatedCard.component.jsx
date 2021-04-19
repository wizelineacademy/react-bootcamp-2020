import React from 'react';
import parse from 'html-react-parser';

const RelatedCard = ({ id, title, thumbnail, video, onSelectedVideo }) => {
  return (
    <div
      className="col-start-7 col-end-8 cursor-pointer mt-0.5 focus:outline-none"
      onClick={() => onSelectedVideo(video)}
      role="button"
      tabIndex="0"
      aria-hidden="true"
      key={id}
    >
      <article className="grid grid-cols-4 dark:bg-gray-600">
        <div className="w-auto h-auto rounded-t lg:rounded-t-none lg:rounded-l dark:border-0 dark:border-transparent text-center overflow-hidden bg-local border-t border-b lg:border-gray-400">
          <img
            className="block h-full w-full flex-none bg-cover text-center overflow-hidden"
            src={thumbnail}
            alt={parse(title)}
          />
        </div>
        <div className="h-auto col-start-2 col-span-5 w-full dark:border-0 border-r border-b border-l dark:border-transparent dark:bg-gray-600 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <div className="mb-2">
            <div className="text-gray-500 text-sm dark:text-white">{parse(title)}</div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RelatedCard;
