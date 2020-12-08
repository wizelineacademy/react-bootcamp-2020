import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { AuthContext } from '../../store/contexts/AuthContext';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';
import classes from './Detail.module.scss';

const VIDEO_URL = 'https://www.youtube.com/embed/';

const Detail = (props) => {
  const [favState, favDispatch] = useContext(FavoriteContext);
  const [authState] = useContext(AuthContext);
  const [video, setVideo] = useState({});

  useEffect(() => {
    const choosenVideo = favState.videos.find(
      (video) => video.id === props.match.params.id
    );
    setVideo(choosenVideo);
  }, [props.match.params.id, favState.videos]);

  const clickedVideoHandler = (id) => {
    props.history.replace(id);
  };

  const favHandler = () => {
    favDispatch({
      type: 'TOGGLE_FAVORITE',
      payload: {
        video,
      },
    });
  };

  const buttonText = video.isFav ? 'Remove from fav' : 'Add to fav';

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
        <div className={classes['detail__description']}>
          {authState.isAuth ? (
            <button className={classes.button} onClick={favHandler}>
              {buttonText}
            </button>
          ) : null}
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </div>
      </div>
      <div className={classes['detail__list']}>
        {favState.videos.map((video) => (
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
