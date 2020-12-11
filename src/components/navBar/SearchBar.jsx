import React, { useContext, useState } from "react";
import youtubeApi from "../../utils/Youtube";
import VideoContext from "../../providers/VideoContext";
import "../styles/SearchBar.css";
const SearchBar = () => {
  const [inputword, setInputWord] = useState("");
  const { setVideoMetaInfo,changinggSetChangingg,setFavoritesFlag } = useContext(VideoContext);

  const onSearch = async (e) => {
    
    changinggSetChangingg(false);
    setFavoritesFlag(false);

    const params = {
      q: inputword
    };

    const varResponse = await youtubeApi.get("/search", {
      params
    });


    if (
      varResponse &&
      varResponse.data &&
      Array.isArray(varResponse.data.items)
    ) {
      setVideoMetaInfo(varResponse.data.items);
    }
   
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
