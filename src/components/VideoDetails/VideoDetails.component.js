import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import MainPane from '../MainPane';
import { Details } from './VideoDetails.component.styled';

function VideoDetails(props) {
  const video = props.videoCurr;
  return (
    <MainPane>
      <Details>
        {video && (
          <div>
            <section>
              <iframe
                width="800"
                height="450"
                allowFullScreen
                frameBorder="0"
                title={video.snippet.title}
                src={'https://www.youtube.com/embed/' + video.id.videoId}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </section>
            <div>
              <h1>{video.snippet.title}</h1>
            </div>
            <p>{video.snippet.description}</p>
          </div>
        )}
      </Details>
    </MainPane>
  );
}

export default VideoDetails;
