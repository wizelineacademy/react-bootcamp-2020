import React from 'react';
import Icon from '../Icon/index';
import Checkboxtoggle from '../CheckboxToggle/index';
import SearchBox from '../SearchBox/index';
import User from '../User/index';
import { useVideosContext } from '../../context/context';

const Header = ({ placeholder, toggleDrawer, openModal, isOpened, closeModal }) => {
  const { state } = useVideosContext();
  const { theme } = state;
  return (
    <nav className="flex items-center flex-wrap bg-blue-900 shadow-lg dark:bg-blue-800">
      <button
        onClick={() => toggleDrawer()}
        type="button"
        className="focus:outline-none flex-initial text-center px-4 m-2 bg-transparent"
      >
        <Icon iconName="menu" className="fill-current text-white h-6 w-6 mr-2" />
      </button>
      <div className="flex-1 text-left sm:px-2 md:px-4 md:m-2">
        <SearchBox placeholder={placeholder} />
      </div>
      <div className="flex-initial text-right px-4 m-2">
        <Checkboxtoggle mode={theme} />
      </div>
      <div className="flex-initial text-right px-4 m-2 hidden md:block">
        <User openModal={openModal} closeModal={closeModal} isOpened={isOpened} />
      </div>
    </nav>
  );
};

export default Header;
