import React, { useState } from 'react';
import { useGetVideo } from '../../utils/hooks/useGetVideo';

import './Video.styles.css';

function numericFormat(stringNumber) {
  return parseFloat(stringNumber, 2).toLocaleString();
}

function getMonthName(monthNumber) {
  const monthNames = [
    'item-0',
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sept',
    'oct',
    'nov',
    'dec',
  ];
  return monthNames[monthNumber];
}

function dateFormat(stringDate) {
  const year = stringDate.substring(0, 4);
  const month = stringDate.substring(5, 7);
  const monthName = getMonthName(parseInt(month, 10));
  const day =
    stringDate.substring(8, 9) === '0'
      ? stringDate.substring(9, 10)
      : stringDate.substring(8, 10);
  return `${day} ${monthName} ${year}`;
}

export default function VideoEmbed({ videoId }) {
  const [video, loadingStatus, errorStatus] = useGetVideo(videoId);
  const [longInfo, setLongInfo] = useState(false);
  const [shortInfo, setShortInfo] = useState(true);

  const showMoreContent = () => {
    setLongInfo(true);
    setShortInfo(false);
  };
  const showLessContent = () => {
    setLongInfo(false);
    setShortInfo(true);
  };

  if (loadingStatus) {
    return <div className="VideoPlayer">Loading videos.</div>;
  }
  if (errorStatus) {
    return (
      <div className="error">
        I am sorry, there is an error with the YouTube API and the video can&#39t be
        loaded..
      </div>
    );
  }

  if (video !== null) {
    const { publishedAt, description, title, channelTitle } = video.snippet;
    const { viewCount, likeCount } = video.statistics;
    const urlVideo = `//www.youtube.com/embed/${videoId}`;
    const iframeHTML = (
      <iframe
        title="youtube player"
        width="851"
        height="479"
        src={urlVideo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
    return (
      <div className="VideoPlayer">
        <div className="video-responsive">{iframeHTML}</div>
        <div className="videoStatistics">
          views {numericFormat(viewCount)} &bull; likes {numericFormat(likeCount)} &bull;{' '}
          {dateFormat(publishedAt)} &bull; {channelTitle}
        </div>
        <div className="videoTitle">{title}</div>
        <hr className="lineSeparator" />
        <div className={shortInfo ? `videoDescription hideContent` : `videoDescription`}>
          {description}
        </div>
        <button
          type="button"
          className={shortInfo ? `linkShow` : `linkShow hideLink`}
          onClick={showMoreContent}
        >
          show more &#9662;
        </button>
        <button
          type="button"
          className={longInfo ? `linkShow` : `linkShow hideLink`}
          onClick={showLessContent}
        >
          show less &#9652;
        </button>
      </div>
    );
  }
  return '';
}
