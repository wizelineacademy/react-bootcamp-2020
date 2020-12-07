import React, { useContext } from "react";
import VideoContext from "../../providers/VideoContext";
import * as Style from "../styles/StyleLogOut";
const LogOut = () => {
  const { setUserSession } = useContext(VideoContext);
  const { changinggSetChangingg } = useContext(VideoContext);
  const { setSelectedVideoPropperties } = useContext(VideoContext);
  const { setVideoMetaInfo } = useContext(VideoContext);
  const { setFavoritesFlag } = useContext(VideoContext);
  const { setFavoritesVideosArrayUser } = useContext(VideoContext);
  const { userSession } = useContext(VideoContext);
  const loggedOut = () => {
    changinggSetChangingg(false);
    setFavoritesFlag(false);
    setVideoMetaInfo({});
    setUserSession({});
    setSelectedVideoPropperties({});
    setFavoritesVideosArrayUser([]);
  };

  return (
    <div>
      <Style.PLogOut onClick={loggedOut}>
        {userSession.user === "noSession" ? "LogIn" : "LogOut"}
      </Style.PLogOut>
    </div>
  );
};
export default LogOut;
