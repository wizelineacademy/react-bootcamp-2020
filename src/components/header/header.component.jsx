import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MainMenu from '../main-menu';
import AvatarMenu from '../avatar-menu';

import { VideosContext } from '../../providers/videos';
import { setSearchQuery, fetchVideosAsync } from '../../providers/videos/videos.actions';

import {
  HeaderContainer,
  InputContainer,
  SearchButton,
  SearchInput,
  IconsContainer,
  IconButtonContainer,
} from './header.styles';

function Header() {
  const history = useHistory();
  const { videosState, videosDispatch } = useContext(VideosContext);
  const { searchQuery } = videosState;

  const fetchQuery = (query) => {
    if (query) {
      history.push('/');
      fetchVideosAsync(query, videosDispatch);
      videosDispatch(setSearchQuery(''));
    }
  };

  const handleSearchButtonClick = () => {
    fetchQuery(searchQuery);
  };

  const handleInputOnChange = (e) => {
    videosDispatch(setSearchQuery(e.target.value));
  };

  const handleInputOnKeyUp = (e) => {
    if (e.keyCode === 13) {
      const {
        target: { value },
      } = e;

      fetchQuery(value);
    }
  };

  return (
    <HeaderContainer>
      <div>
        <MainMenu />
      </div>

      <InputContainer>
        <SearchInput
          placeholder='Search'
          type='text'
          onKeyUp={handleInputOnKeyUp}
          onChange={handleInputOnChange}
          value={searchQuery}
        />
        <IconButtonContainer onClick={handleSearchButtonClick}>
          <SearchButton />
        </IconButtonContainer>
      </InputContainer>

      <IconsContainer>
        <IconButtonContainer>
          <AvatarMenu />
        </IconButtonContainer>
      </IconsContainer>
    </HeaderContainer>
  );
}

export default Header;
