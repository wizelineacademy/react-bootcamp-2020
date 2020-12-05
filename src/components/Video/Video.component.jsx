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
        width="480"
        height="270"
        src={urlVideo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
    return <div className="videosList">{iframeHTML}</div>;
    // return <div className="videosList"> {video.player.embedHtml} </div>;
  }
  return '';
}

// "<iframe width="480" height="270" src="//www.youtube.com/embed/nmXMgqjQzls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"
