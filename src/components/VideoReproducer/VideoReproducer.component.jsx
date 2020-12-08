import React from 'react';

import { ReproducerWrapper, Reproducer, VideoInformation } from './VideoReproducer.style';
import './VideoReproducer.style.css';
// has to receive selectedv video ID from VideoSearch
// calls Video endpoint to retrieve information
// To add channel image, has to call Channel endpoint with ID

function VideoReproducer() {
  return (
    <ReproducerWrapper className="reproducer-wrapper">
      <Reproducer
        width="700"
        height="400"
        allowFullScreen
        frameBorder="0"
        title="rick roll"
        src="https://www.youtube.com/embed/psFf4KXJZoQ"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      />
      <VideoInformation className="videoInformation">
        <p className="title">Wonder Woman 1984 - Official Main Trailer</p>
        <div className="channel">
          <img
            className="channelImage"
            src="https://yt3.ggpht.com/ytc/AAUvwnhIJZKqH3FkWGKNP-OufNVlj7qHMVzPtIItQ8DYOg=s88-c-k-c0x00ffffff-no-rj"
            alt="Channel avatar"
          />
          <p className="channelName">Warner Brothers</p>
        </div>
        <p className="datePublished">Published 22/08/2020</p>
        <p className="description">
          Fast forward to the 1980s as Wonder Woman’s next big screen adventure finds her
          facing two all-new foes: Max Lord and The Cheetah.Fast forward to the 1980s as
          Wonder Woman’s next big screen adventure finds her facing two all-new foes: Max
          Lord and The CheetahFast forward to the 1980s as Wonder Woman’s next big screen
          adventure finds her facing two all-new foes: Max Lord and The Cheetah{' '}
        </p>
      </VideoInformation>
    </ReproducerWrapper>
  );
}

export default VideoReproducer;
