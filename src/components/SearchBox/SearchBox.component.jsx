import React from 'react';

import Icon from '../Icon/index'

import './SearchBox.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
    return (<div className="search">
        <input type="text" className="input" placeholder={placeholder} />
        <Icon iconName="magnifying-glass"></Icon>
  </div>);
}

export default SearchBox;
