import React, { useContext } from 'react';

import { VideoContext } from '../../providers/Video/Video.provider';
import './Searchbox.styles.css';

import {
  NavBarSearchBox,
  Cover,
  TB,
  TD,
  SearchInput,
  SearchButton,
  SCircle,
  ButtonSpan,
} from './Searchbox.styles';

function SearchBox() {
  const { searchTerm, setSearchTerm, fetchVideos } = useContext(VideoContext);

  const handleChangeSearchInput = (value) => {
    setSearchTerm(value);
  };

  const handleClickSearch = () => {
    fetchVideos();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchVideos();
    }
  };

  return (
    <NavBarSearchBox>
      <Cover id="cover">
        <TB>
          <TD>
            <SearchInput
              type="text"
              placeholder="Search"
              required
              value={searchTerm}
              onChange={(event) => handleChangeSearchInput(event.target.value)}
              onKeyDown={(event) => handleKeyPress(event)}
            />
          </TD>
          <TD id="s-cover">
            <SearchButton type="submit" onClick={handleClickSearch}>
              <SCircle id="s-circle" />
              <ButtonSpan />
            </SearchButton>
          </TD>
        </TB>
      </Cover>
    </NavBarSearchBox>
  );
}

export default SearchBox;
