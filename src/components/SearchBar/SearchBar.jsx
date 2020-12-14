import React, { useContext, useState } from "react";
import * as youtubeAPI from "../../utils/Youtube";
import VideoContext from "../../providers/VideoContext";
import "./SearchBar.style.css";
const SearchBar = () => {
  const [inputword, setInputWord] = useState("");
  const { setVideoMetaInfo,changinggSetChangingg,setFavoritesFlag } = useContext(VideoContext);

  const onSearch = async (e) => {
    
    const params = {
      q: inputword
    };

    const varResponse = await youtubeAPI.search(params);
    changinggSetChangingg(false);
    setFavoritesFlag(false);
    setInputWord("");
    if (
      varResponse &&
      varResponse.data &&
      Array.isArray(varResponse.data.items)
    ) {
      setVideoMetaInfo(varResponse.data.items);
    }

    e.persist();
  };

  const onChange = (e) => {
    setInputWord(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        className="inputSearch"
        value={inputword}
        onChange={onChange}
        id="video"
        type="text"
        placeholder="Search Video..."
        role="inputSearch"
      />
      <button className="button" type="button" onClick={onSearch} role="boton" >
        {" "}
        Search
      </button>
    </div>
  );
};

export default SearchBar;
