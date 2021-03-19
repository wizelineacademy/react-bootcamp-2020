
import React from 'react';

import SearchBox from '../SearchBox/index';
import Icon from '../Icon/index'

import './Header.styles.css';

const Header = ({ placeholder, handleChange }) => {
    return (<header className="header">
    <label>
        <div className="menu-icon">
            <Icon iconName="home"></Icon>
        </div>
    </label>
    <SearchBox></SearchBox>
    <nav className="user-nav">
        <div className="user">
            <img src="./avatar.png" alt="Username" className="user-photo" />
        </div>
    </nav>
</header>);
}

export default Header;
