import React, { useContext } from "react";
import VideoContext from "../../providers/VideoContext";
import * as Style from "../styles/styleSheet.js";
import "../styles/styleGrids.css";
import * as Style2 from "../styles/StyleVideoContainer";
import ButtonFavorites from "../buttonFavorites/ButtonFavorites";
const VideoContainer = () => {
  const { videoPropperties } = useContext(VideoContext);
  const { userSession } = useContext(VideoContext);

  return (
    <div className="grid-item1one">
      <Style.ResponsiveIframe
        title={videoPropperties.videoId}
        src={`https://www.youtube.com/embed/${videoPropperties.videoId}`}
        className="video-iframe "
      />
      <Style2.Title>{videoPropperties.videoName}</Style2.Title>
      <div>
        <Style2.PublishedDate>
          Published on: {videoPropperties.published}
        </Style2.PublishedDate>
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
