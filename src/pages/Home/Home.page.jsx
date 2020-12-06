import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import VideoItem from '../../components/VideoItem';
import { HomeContainer } from './Home.styled';
import { useFetch } from '../../utils/hooks/useFetch';
import { StateContext } from '../../utils/State';


const HomePage = () => {

  const { VideoList } = useFetch();
  const history = useHistory();
  const { Theme: { PrimaryColor } } = useContext(StateContext);

  return (
      <HomeContainer
        color={PrimaryColor}
      >
        {
          (VideoList) && (
            VideoList.map((video) => 
              <VideoItem 
                key={video.etag} 
                videoInfo={video.snippet} 
                videoID={video.id} 
                viewVideo={() => history.push(`/player`) }
              />
            )
          )
        }
      </HomeContainer>
  );
}

export default HomePage;
