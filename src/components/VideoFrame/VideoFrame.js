import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import PageContext from "../../providers/Context/PageContext";

import * as Styles from "./styles/VideoFrameStyles";

const VideoFrame = () => {
  const { video } = useContext(PageContext);
  const { objVideo } = useContext(PageContext);
  const { favVideos, setFavVideos } = useContext(PageContext);
  const { userLogged } = useContext(PageContext);

  const handlerAddFavs = () => {
    let auxArr = [...favVideos];
    auxArr.push(objVideo);
    setFavVideos(auxArr);
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
          <Button variant="outlined" color="primary">Primary</Button>
          </div>
          
        </Styles.Info>
      </Styles.Container>
    </div>
  );
};

export default VideoFrame;
