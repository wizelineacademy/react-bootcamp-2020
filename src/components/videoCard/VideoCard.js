import React, { useContext } from "react";
import "./VideoCard.style.css";
import VideoContext from "../../providers/VideoContext";

const VideoCard = (props) => {
  const { changingg, changinggSetChangingg, setSelectedVideoPropperties, videoPropperties } = useContext(VideoContext);

  const setVideoPropperties = () => {
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
