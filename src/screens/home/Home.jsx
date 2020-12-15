import React, { useContext } from 'react';
import Card from '../../components/card/Card';
import classes from './Home.module.scss';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';

const Home = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(FavoriteContext);
  const isFav = props.match.path === '/fav';
  const videos = isFav ? state.favoriteVideos : state.videos;
  const title = isFav ? 'Your favorites videos!' : 'Here you will find awesome videos!';

  const clickedVideoHandler = (id) => {
    props.history.push({ pathname: `detail/${id}` });
  };

  return (
    <div className={classes.home}>
      <div className={classes['home__heading']}>
        <h1>{title}</h1>
      </div>
      <div className={classes['home__list']}>
        {videos.map((video) => (
          <Card
            isHome={true}
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

export default Home;
