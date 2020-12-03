import React from 'react';
import { useHistory } from 'react-router-dom';
import VideoItem from '../../components/VideoItem';
import { HomeContainer } from './Home.styled';
import { useFetch } from '../../utils/hooks/useFetch';


const HomePage = () => {

  const { VideoList } = useFetch();
  const history = useHistory();

  return (
    <div>
      <HomeContainer>
        {
          (VideoList) && (
            VideoList.map((video) => 
              <VideoItem 
                key={video.etag} 
                videoInfo={video.snippet} 
                videoID={video.id} 
                viewVideo={(id) => history.push(`/player/${id}`) }
              />
            )
          )
        }
      </HomeContainer>
    </div>
  );
}

export default HomePage;
