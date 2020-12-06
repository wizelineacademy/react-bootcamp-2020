import React, { useContext, useState } from "react";
import youtubeApi from "../../utils/Youtube";
import VideoContext from "../../providers/VideoContext";
import "../styles/SearchBar.css";
const SearchBar = () => {
  const [inputword, setInputWord] = useState("");
  const { setVideoMetaInfo } = useContext(VideoContext);
  const { changinggSetChangingg } = useContext(VideoContext);
  const { setFavoritesFlag } = useContext(VideoContext);

  const onSearch = async (e) => {
    console.log("do request with params", inputword);

    const params = {
      q: inputword
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
    console.log("Response", varResponse);
    setInputWord("");
    e.stopPropagation();
    e.preventDefault();
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
      />
      <button className="button" type="button" onClick={onSearch}>
        {" "}
        Search
      </button>
    </div>
  );
};

export default SearchBar;
