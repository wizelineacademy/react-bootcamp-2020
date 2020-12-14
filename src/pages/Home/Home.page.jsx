import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import VideoItem from '../../components/VideoItem';
import { HomeContainer } from './Home.styled';
import { useFetch } from '../../utils/hooks/useFetch';
import { ConfigContext } from '../../utils/ConfigState';


const HomePage = () => {

  const { VideoList } = useFetch();
  const history = useHistory();
  const { state: { Theme: { PrimaryColor } } } = useContext(ConfigContext);

  return (
      <HomeContainer
        data-testid="HomeCont"
        color={PrimaryColor}
      >
        {
          (VideoList) && (
            VideoList.map((video) => 
              <VideoItem 
                key={video.etag} 
                videoInfo={video.snippet} 
                videoID={video.id} 
                viewVideo={(idVideo) => history.push(`/player/${idVideo}`) }
              />
            )
          )
        }
      </HomeContainer>
  );
}

export default HomePage;
