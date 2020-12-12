import React, { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.style.css";
import VideoContext from "../../providers/VideoContext";
import { ImYoutube2 } from "react-icons/im";
import LogOut from "../LogOut/LogOut";
import Favorites from "../Favorites/Favorites";
import * as youtubeAPI from "../../utils/Youtube";
const NavBar = () => {
  const { userSession, changinggSetChangingg, setFavoritesFlag, setVideoMetaInfo } = useContext(VideoContext);
 
  const getVideoTendencies = async () => {
    
    const params = {
      q: ""
    };

    const varResponse = await youtubeAPI.search(
      params
    );

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
        onClick={getVideoTendencies}
        role = "icon-Yt"
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
    <div className="navBar">
      <ImYoutube2 size="80" className="imYoutube" />
    </div>
  );
};
export default NavBar;
