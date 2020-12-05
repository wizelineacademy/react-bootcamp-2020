import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MainMenu from '../main-menu';
import AvatarMenu from '../avatar-menu';

import { VideosContext } from '../../providers/videos';
import { setSearchQuery, fetchVideosAsync } from '../../providers/videos/videos.actions';

import './header.styles.scss';

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
    <div className='header-container'>
      <div className='header-left'>
        <MainMenu />
      </div>

      <div className='input-container'>
        <input
          placeholder='Search'
          type='text'
          onKeyUp={handleInputOnKeyUp}
          onChange={handleInputOnChange}
          value={searchQuery}
        />
        <SearchIcon className='search-btn' onClick={handleSearchButtonClick} />
      </div>

      <div className='icons'>
        <AvatarMenu />
      </div>
    </div>
  );
}

export default Header;
