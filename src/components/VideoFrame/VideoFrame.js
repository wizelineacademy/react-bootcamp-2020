import React, { useContext } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import PageContext from "../../providers/Context/PageContext";
import './styles/VideoFrame.css';

import * as Styles from "./styles/VideoFrameStyles";

const VideoFrame = () => {
  const { video } = useContext(PageContext);
  const { objVideo } = useContext(PageContext);
  const { userLogged } = useContext(PageContext);
  const { mapFavs } = useContext(PageContext);

  const handlerAddFavs = () => {
    let flag = true;
    let Arr = [];
    let auxArr = mapFavs.get(userLogged.user);
    if( mapFavs.get(userLogged.user)){
      for (let i = 0; i < auxArr.length; i++) {
        if(auxArr[i].id.videoId === objVideo.id.videoId){
          flag = false;
        }
      }
      if(flag){
        mapFavs.get(userLogged.user).push(objVideo);
      }   
    }
    else{
      Arr.push(objVideo);
      mapFavs.set(userLogged.user,Arr);
    }
  
  };

  return (
    <div>
      <Styles.Container>
        <Styles.ResponsiveIframe
          id="videoPlayer"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="Reproductor"
        />
        <Styles.Info>
          <div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <p>{video.publishedDate}</p>
          </div>
          <div>
          <button className={userLogged.user ? 'favs active' : 'favs'} onClick={handlerAddFavs} variant="outlined" color="primary"><b><RiHeartAddLine/>Favs</b></button>
          </div>
          
        </Styles.Info>
      </Styles.Container>
    </div>
  );
};

export default VideoFrame;
