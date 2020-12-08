import React, { useContext } from 'react';
import Card from '../../components/card/Card';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';
import classes from './Detail.module.scss';

const Detail = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(FavoriteContext);

  // console.log(props.match.params.id);
  const clickedVideoHandler = (id) => {
    console.log(id);
  };
  return (
    <div className={classes.detail}>
      <div className={classes['detail__video']}>
        <iframe
          width="95%"
          height="400"
          src="https://www.youtube.com/embed/Qfmeb2e_kb4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <h2>Title</h2>
          <p>lorem</p>
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
