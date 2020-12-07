import React, { useContext } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import ListVideoContainer from "../../components/listVideos/ListVideos";
import VideoContext from "../../providers/VideoContext";
import youtubeApi from "../../utils/Youtube";

const Home = () => {
  const { videoMetaInfo } = useContext(VideoContext);
  const videosLocal = videoMetaInfo;
  const { changinggSetChangingg } = useContext(VideoContext);
  const { setFavoritesFlag } = useContext(VideoContext);
  const { setVideoMetaInfo } = useContext(VideoContext);
  const { userSession } = useContext(VideoContext);

  const VideoTendencies = async () => {
    console.log("do request with params FORMLOIn");
    const params = {
      q: ""
    };

    const varResponse = await youtubeApi.get("/search", {
      params
    });

    changinggSetChangingg(false);
    setFavoritesFlag(false);

    if (
      varResponse &&
      varResponse.data &&
      Array.isArray(varResponse.data.items)
    ) {
      setVideoMetaInfo(varResponse.data.items);
    }
  };

  (() => {
    if (videosLocal.length < 1) {
      //console.log("Hola HOME", videosLocal);
      //console.log("Hola HOME", videosLocal.length);
      VideoTendencies();
    } else {
      //console.log("Videos meta info HOME", videoMetaInfo);
    }
  })();

  return (
    <div>
      <Link to="/reproductorPlayer">
        <ListVideoContainer />
      </Link>

      <Route
        render={() =>
          userSession.loggedIn ? <Redirect to="/" /> : <Redirect to="/logIn" />
        }
      />
    </div>
  );
};
export default Home;
