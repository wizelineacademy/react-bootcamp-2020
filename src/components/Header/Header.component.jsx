import React from 'react';
import Icon from '../Icon/index';
import Checkboxtoggle from '../CheckboxToggle/index';
import SearchBox from '../SearchBox/index';

const Header = ({ onTermSubmit, placeholder, mode }) => {
  return (
    <nav className="flex items-center flex-wrap bg-blue-900 shadow-lg">
      <div className="flex-initial text-center px-4 m-2">
        <Icon iconName="menu" className="fill-current text-white h-6 w-6 mr-2" />
      </div>
      <div className="flex-1 text-left px-4 m-2">
        <SearchBox
          placeholder={placeholder}
          onTermSubmit={onTermSubmit}
          className="py-2 text-sm text-white bg-blue-900 bg-opacity-75 rounded pl-10 focus:outline-none focus:bg-blue-900 focus:bg-opacity-25 focus:text-white"
        />
      </div>
      <div className="flex-initial text-right px-4 m-2">
        <Checkboxtoggle mode={mode} />
      </div>
      <div className="flex-initial text-right px-4 m-2">
        <Icon
          iconName="user"
          className="fill-current text-gray-400 h-10 w-10 rounded-full border-2 border-gray-400"
        />
      </div>
    </nav>
  );
};

export default Header;
