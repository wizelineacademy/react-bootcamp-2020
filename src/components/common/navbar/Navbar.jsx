import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import Button from '../button';
import './Navbar.css';

import SearchBar from '../searchBar';
import ToggleSwitch from '../toggleSwitch';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [dark, setDark] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React bootcamp 2020 <i className="fab fa-react"></i></h1>
            
            <div className="search-bar">
                <SearchBar />
            </div>
            
            <div className="switch">
                <ToggleSwitch isOn={dark} handleToggle={() => setDark(!dark)} />
            </div>

            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}>
                </i>
            </div>

            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a 
                                    className={item.cName} 
                                    href={item.url}                                    
                                >
                                    {item.title}
                                </a>                            
                            </li>
                        );
                    })
                }
            </ul>
            <Button>Login</Button>
        </nav>
    );
}

export default Navbar;