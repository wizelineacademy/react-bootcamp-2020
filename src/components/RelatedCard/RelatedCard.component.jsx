/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import parse from 'html-react-parser';

const RelatedCard = ({ title, thumbnail, onSelectedVideo, video }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="col-start-7 col-end-8 md:col-start-1 cursor-pointer mt-0.5"
      onClick={() => onSelectedVideo(video)}
      key={video.etag}
    >
      <div className="grid grid-cols-4">
        <div className="w-auto h-auto rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-local border-t border-b lg:border-gray-400">
          <img
            className="block h-auto w-auto flex-none bg-cover text-center overflow-hidden"
            src={thumbnail}
            alt={parse(title)}
          />
        </div>
        <div className="h-auto col-start-2 col-span-5 w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal">
          <div className="mb-2">
            <div className="text-gray-500 text-sm">{parse(title)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
