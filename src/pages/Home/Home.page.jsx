import React from 'react';
import { useHistory } from 'react-router-dom';
import VideoItem from '../../components/VideoItem';
import { HomeContainer } from './Home.styled';
import { useFetch } from '../../utils/hooks/useFetch';


const HomePage = () => {

  const { VideoList } = useFetch();
  const history = useHistory();

  return (
      <HomeContainer>
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
