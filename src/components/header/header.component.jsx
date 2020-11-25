import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

import MainMenu from '../main-menu/main-menu.component';

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
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
