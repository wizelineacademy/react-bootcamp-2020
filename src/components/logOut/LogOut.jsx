import React, { useContext } from "react";
import VideoContext from "../../providers/VideoContext";
import * as Style from "../styles/StyleLogOut";
const LogOut = () => {
  const { setUserSession, changinggSetChangingg, setSelectedVideoPropperties, setVideoMetaInfo, setFavoritesFlag, setFavoritesVideosArrayUser, userSession } = useContext(VideoContext);

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
      <Style.PLogOut onClick={loggedOut} role = "onClickOut">
        {userSession.user === "noSession" ? "LogIn" : "LogOut"}
      </Style.PLogOut>
    </div>
  );
};
export default LogOut;
