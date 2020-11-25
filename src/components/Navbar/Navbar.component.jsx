import React from 'react';
import { Switch} from 'antd'
import DropdownLogin from '../DropdownLogin/DropdownLogin.component';
import InputSearch from '../InputSearch/InputSearch';
import MenuButton from '../MenuButton/MenuButton.component';
import './Navbar.styles.css';


function Navbar() {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return <nav className="flex full-width nav-bar">
    <div className="search-container">
      <MenuButton />
      <InputSearch />
    </div>
    <div className="login-container">
      <Switch onChange={onChange} className="switch-theme" /> <span className="label-switcher">Dark Mode</span>
      <DropdownLogin />
    </div>
  </nav>

}

export default Navbar;
