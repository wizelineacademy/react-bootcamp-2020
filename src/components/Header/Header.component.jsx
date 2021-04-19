import React from 'react';
import Icon from '../Icon/index';
import Checkboxtoggle from '../CheckboxToggle/index';
import SearchBox from '../SearchBox/index';

const Header = ({ onTermSubmit, placeholder, mode }) => {
  return (
    <nav className="flex items-center flex-wrap bg-blue-900 shadow-lg dark:bg-blue-800">
      <div className="flex-initial text-center px-4 m-2">
        <Icon iconName="menu" className="fill-current text-white h-6 w-6 mr-2" />
      </div>
      <div className="flex-1 text-left px-4 m-2">
        <SearchBox placeholder={placeholder} onTermSubmit={onTermSubmit} />
      </div>
      <div className="flex-initial text-right px-4 m-2">
        <Checkboxtoggle mode={mode} />
      </div>
      <div className="flex-initial text-right px-4 m-2 hidden md:block">
        <Icon
          iconName="user"
          className="fill-current dark:border-gray-800 dark:text-gray-800 text-gray-400 h-10 w-10 rounded-full border-2 border-gray-400"
        />
      </div>
    </nav>
  );
};

export default Header;
