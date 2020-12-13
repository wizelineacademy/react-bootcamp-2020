import React, { useContext, useEffect } from "react";
import VideoContext from "../../providers/VideoContext";
import "./VideoContainer.style.css";
import {Title, PublishedDate, ResponsiveIframe} from "./VideoContainer.style";
import ButtonFavorites from "../ButtonFavorites/ButtonFavorites";

const VideoContainer = () => {
  const { userSession, videoPropperties} = useContext(VideoContext);
  
  return (
    <div className="grid-item1one">
      <ResponsiveIframe
        title={videoPropperties.videoId}
        src={`https://www.youtube.com/embed/${videoPropperties.videoId}`}
        className="video-iframe "
      />
      <Title>{videoPropperties.videoName}</Title>
      <div>
        <PublishedDate>
          Published on: {videoPropperties.published}
        </PublishedDate>
        <br />
        {userSession.user === "noSession" ? (
          <React.Fragment />
        ) : (
            <ButtonFavorites />    
        )}
      </div>
    </div>
  );
};
export default VideoContainer;
