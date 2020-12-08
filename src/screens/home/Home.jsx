import React, { useContext } from 'react';
import Card from '../../components/card/Card';
import classes from './Home.module.scss';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';

const Home = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(FavoriteContext);

  const clickedVideoHandler = (id) => {
    props.history.push({ pathname: `detail/${id}` });
  };

  return (
    <div className={classes.home}>
      <div className={classes['home__heading']}>
        <h1>Here you'll find awesome videos!</h1>
      </div>
      <div className={classes['home__list']}>
        {state.videos.map((video) => (
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
