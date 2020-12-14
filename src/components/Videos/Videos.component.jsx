import React from 'react';
import styled from 'styled-components';
import Video from '../Video';

const VideosSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function Videos({ videos }) {
  return (
    <VideosSection>
      {videos &&
        videos.map((video) => {
          return video ? (
            <Video
              key={video.id.videoId}
              title={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              id={video.id.videoId}
              img={video.snippet.thumbnails.medium.url}
            />
          ) : (
            <h1>No disponible</h1>
          );
        })}
    </VideosSection>
  );
}

export default Videos;
