import React, { useContext, useEffect, useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import PageContext from "../../providers/Context/PageContext";
import './styles/VideoFrame.css';

import * as Styles from "./styles/VideoFrameStyles";

const VideoFrame = () => {
  const { video, objVideo, userLogged, mapFavs} = useContext(PageContext);

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
  }

  const handlerRemoveFavs = () => {
    let auxArr = mapFavs.get(userLogged.user);
    for (let i = 0; i < auxArr.length; i++) { 
      if(auxArr[i].id.videoId === objVideo.id.videoId){
        auxArr.splice(i,1);
      }
    }
  }


  return (
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
          <button className={userLogged.user ? 'favs active' : 'favs'} onClick={handlerAddFavs} variant="outlined" color="primary"><b><RiHeartAddLine/>Add</b></button>
          <button className={userLogged.user ? 'favs active' : 'favs'} onClick={handlerRemoveFavs} variant="outlined" color="primary"><b><RiHeartAddLine/>Remove</b></button>
          </div>
        </Styles.Info>
      </Styles.Container>
  );
};

export default VideoFrame;
