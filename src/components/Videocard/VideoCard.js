import React, { useContext } from "react";
import PageContext from "../../providers/Context/PageContext";
import { Link } from "react-router-dom";
import * as Styles from "./styles/VideoCardStyles";

const VideoCard = (props) => {
  const { video, setVideo } = useContext(PageContext);
  const { setObjVideo } = useContext(PageContext);

  const HandleVideo = () => {
    const videoAux = { ...video };
    videoAux.id = props.id;
    videoAux.title = props.titulo;
    videoAux.publishedDate = props.fecha;
    videoAux.description = props.descripcion;

    setVideo(videoAux);
  };

  const SetData = () => {
    HandleVideo();
    setObjVideo(props.objeto);
  };

  return (
    <div onClick={SetData}>
      <Styles.Card>
        <Link key={props.id} to="/video-player">
          <img src={props.imagen} alt={props.titulo} />
          <Styles.Descriptions>
            <h4>{props.titulo}</h4>
            <p>{props.descripcion}</p>
          </Styles.Descriptions>
        </Link>
      </Styles.Card>
    </div>
  );
}

export default VideoCard;
