import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { PageContent, VideoList, VideoContent, VideoInformationContainer } from "./VideoPlayer.styles";
import { useAppDataContext } from "../../providers/AppData";
import { useSingleVideoAndRelated } from "../../utils/hooks/useSingleVideoAndRelated";
import VideoCard from "../../components/VideoCard";
import { ThemeContext } from 'styled-components';
import actions from "../../state/actions";


const VideoPlayer = () => {

   const { state, dispatch } = useAppDataContext();

   const { idVideo } = useParams();
   useSingleVideoAndRelated(idVideo);

   useEffect(() => {
      dispatch({ type: actions.SET_CURRENT_VIDEO, payload: idVideo })
   }, [dispatch, idVideo])
   const { theme } = useContext(ThemeContext)


   const { videos, currentVideo } = state;




   return (
      <PageContent>
         <VideoContent>
            <iframe title="youtube-player" id="player" type="text/html" width="100%" height="100%"
               src={`http://www.youtube.com/embed/${idVideo}?enablejsapi=1`}
               frameBorder="0">
            </iframe>
            <VideoInformationContainer>
               <h2> {currentVideo ? currentVideo.snippet.title : null}</h2>
               <p> {currentVideo ? currentVideo.snippet.description : null}</p>
            </VideoInformationContainer>
         </VideoContent>
         <VideoList theme={theme}>
            {
               videos ?
                  videos
                     .filter(video => video.id.videoId !== idVideo)
                     .map(video => <VideoCard size="small" video={video} key={video.id.videoId} />)
                  : null
            }
         </VideoList>
      </PageContent>
   );
}

export default VideoPlayer;
