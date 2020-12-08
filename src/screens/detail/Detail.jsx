import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';
import classes from './Detail.module.scss';

const VIDEO_URL = 'https://www.youtube.com/embed/';

const Detail = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(FavoriteContext);
  const [video, setVideo] = useState({});

  useEffect(() => {
    const choosenVideo = state.videos.find((video) => video.id === props.match.params.id);
    setVideo(choosenVideo);
  }, [props.match.params.id, state.videos]);

  const clickedVideoHandler = (id) => {
    props.history.replace(id);
  };

  return (
    <div className={classes.detail}>
      <div className={classes['detail__video']}>
        <iframe
          width="95%"
          height="400"
          src={`${VIDEO_URL}${video.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="youtubeFrame"
        ></iframe>
        <div>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
      </div>
      <div className={classes['detail__list']}>
        {state.videos.map((video) => (
          <Card
            isHome={false}
            clicked={() => clickedVideoHandler(video.id)}
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Detail;
