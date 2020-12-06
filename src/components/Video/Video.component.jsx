import React from 'react';
import { useGetVideo } from '../../utils/hooks/useGetVideo';

import './Video.styles.css';

export default function VideoEmbed({ videoId }) {
  console.log('VideoId: ', videoId);
  const video = useGetVideo(videoId);

  if (video !== null) {
    // console.log(video);
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
        <div>{iframeHTML}</div>
        <div>{video.snippet.title}</div>
        <div className="videoDescription">{video.snippet.description}</div>
        <div>{video.snippet.publishedAt}</div>
        <div>{video.statistics.viewCount}</div>
        <div>{video.statistics.likeCount}</div>
        <div>{video.snippet.channelTitle}</div>
      </div>
    );
    // return <div className="videosList"> {video.player.embedHtml} </div>;
  }
  return '';
}

// "<iframe width="480" height="270" src="//www.youtube.com/embed/nmXMgqjQzls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"
