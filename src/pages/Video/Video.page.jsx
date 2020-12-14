import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { VideoContext } from '../../providers/Video';
import { useVideo } from '../../utils/hooks/useVideo';

const VideoSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function Video() {
  const { setCurrentVideo } = useContext(VideoContext);
  const { idVideo } = useParams();
  const [title, setTitle] = useState('N/A');
  const [description, setDescription] = useState('N/A');
  const [video] = useVideo(idVideo);
  useEffect(() => {
    if(video && Object.keys(video).length >= 0) {
      setTitle(video.snippet.title);
      setDescription(video.snippet.description)
    }
    return () => {
      setCurrentVideo(video);
    }
  }, [video, setCurrentVideo]);
  return <VideoSection>
      <iframe
        title="youtube-player"
        id="player"
        type="text/html"
        height="500"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={`http://www.youtube.com/embed/${idVideo}`}
        frameBorder="0"
      />
      <h3>{title}</h3>
      <h5>{description}</h5>
  </VideoSection>;
}

export default Video;
