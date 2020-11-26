import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import MainMenu from '../main-menu';
import AvatarMenu from '../avatar-menu';

import './header.styles.scss';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-left'>
        <MainMenu />
      </div>

      <div className='input-container'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='search-btn' />
      </div>

      <div className='icons'>
        <AvatarMenu />
      </div>
    </div>
  );
}

export default Header;
