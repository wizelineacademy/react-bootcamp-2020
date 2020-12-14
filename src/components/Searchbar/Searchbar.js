import React, { useContext } from "react";
import * as BiIcons from "react-icons/bi";
import PageContext from "../../providers/Context/PageContext";
import * as apiYoutube from "../../utils/apiYoutube";
import { useHistory } from "react-router-dom";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  const history = useHistory();
  const { searchText, setSearchText } = useContext(PageContext);
  const { setVideoList } = useContext(PageContext);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  }

  const enterSearch = (e) =>{
    if (e.key === 'Enter') {
      searchVideo(e);
    }
  }

  const searchVideo = async (e) => {

    const params = {
      q: searchText
    };
    const varResponse = await apiYoutube.search(
      params
    );
    setVideoList(varResponse.data.items);

    history.push('/');
    
  }

  return (
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            role="searching"
            className={styles.searchTerm}
            type="text"
            value={searchText}
            name="search"
            placeholder="Search.."
            onChange={handleSearch}
            onKeyDown ={enterSearch}
          />
          <button type="submit" className={styles.searchButton} onClick={searchVideo}>
            <BiIcons.BiSearch />
          </button>
        </div>
      </div>
  );
};

export default Searchbar;
