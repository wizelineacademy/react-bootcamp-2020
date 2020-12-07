import React, { useContext } from "react";
import SearchBar from "./SearchBar";

import "../styles/NavBar.css";
import "../styles/SearchBar.css";
import VideoContext from "../../providers/VideoContext";
import { ImYoutube2 } from "react-icons/im";
import LogOut from "../logOut/LogOut";
import Favorites from "../favorites/Favorites";
import youtubeApi from "../../utils/Youtube";
const NavBar = () => {
  const { userSession } = useContext(VideoContext);
  const { changinggSetChangingg } = useContext(VideoContext);
  const { setFavoritesFlag } = useContext(VideoContext);
  const { setVideoMetaInfo } = useContext(VideoContext);

  const videoTendencies = async () => {
    //console.log("do request with params NAVBAR YOUTUBE");
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

  return userSession.loggedIn ? (
    <div className="navBar">
      <ImYoutube2
        style={{ cursor: "pointer" }}
        size="80"
        className="imYoutube"
        onClick={videoTendencies}
      />
      {userSession.user === "noSession" ? (
        <React.Fragment></React.Fragment>
      ) : (
        <Favorites />
      )}

      <SearchBar />
      <div className="welcome">Welcome {userSession.user}</div>
      <LogOut />
      <div className="user one"></div>
    </div>
  ) : (
    <div className="navBar ">
      <ImYoutube2 size="80" className="imYoutube" />
    </div>
  );
};
export default NavBar;
