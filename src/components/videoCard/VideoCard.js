import React, { useContext } from "react";
import "../styles/VideoCard.css";
import VideoContext from "../../providers/VideoContext";
import "../styles/styleGrids.css";

const VideoCard = (props) => {
  const { changingg, changinggSetChangingg } = useContext(VideoContext);
  const { videoPropperties, setSelectedVideoPropperties } = useContext(
    VideoContext
  );

  //console.log("selectedVideoId  ññ", selectedVideoId);
  //selectedVideoName, setSelectedVideoName
  const setVideoPropperties = () => {
    //console.log("AQUI VEMOS SI ESTA LOGUEADO", userSession.loggedIn);
    const videoProppertiesaux = { ...videoPropperties };
    videoProppertiesaux.videoId = props.id;
    videoProppertiesaux.videoName = props.name;
    videoProppertiesaux.published = props.published;
    videoProppertiesaux.imageVideo = props.imagen;
    videoProppertiesaux.buttonText = props.imagen.buttonText;
    setSelectedVideoPropperties(videoProppertiesaux);
    changinggSetChangingg(true);
  };

  return (
    <div className={changingg ? "noClass" : "grid-item2"}>
      <div role='onclick'
        className="container"
        onClick={() => {
          setVideoPropperties();
        }}
      >
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <img src={props.imagen} alt={props.name} />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>{props.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
