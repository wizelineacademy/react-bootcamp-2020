import React from 'react';
import DropdownLogin from '../DropdownLogin/DropdownLogin.component';
import InputSearch from '../InputSearch/InputSearch';
import MenuButton from '../MenuButton/MenuButton.component';
import { useTheme } from '../../providers/Theme/Theme.provider';
import './Navbar.styles.css';
import { SwitchStyled } from './Switch.styled';

function Navbar() {
  const { triggerSetTheme, theme } = useTheme();
  const onChange = (checked) => {
    if (checked) {
      triggerSetTheme('dark');
    } else {
      triggerSetTheme('light');
    }
  };

  return (
    <nav className="flex full-width nav-bar">
      <div className="search-container">
        <MenuButton />
        <InputSearch />
      </div>
      <div className="login-container">
        <SwitchStyled
          onChange={onChange}
          defaultChecked={theme === 'dark'}
          className="switch-theme"
        />
        <span className="label-switcher">Dark Mode</span>
        <DropdownLogin />
      </div>
    </nav>
  );
}

export default Navbar;
