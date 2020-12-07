import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import Button from '../button';

import {Link} from 'react-router-dom';
import {Image, Menu, Icon} from 'semantic-ui-react';
import './Navbar.scss';

import SearchBar from '../searchBar';
import ToggleSwitch from '../toggleSwitch';

const Navbar = ({handleSubmit}) => {
    const [clicked, setClicked] = useState(false);
    const [dark, setDark] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    return (
        <Menu borderless className='top-menu' fixed='top'>
            <Menu.Item header className='logo'>
            <i className="fab fa-react"></i><Link to='/'><p className="name-header">React bootcamp 2020</p></Link>
            </Menu.Item>
            <Menu.Menu className='nav-container'>
                <SearchBar handleFormSubmit={handleSubmit}/>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item onClick={ handleClick }>
                    <Icon 
                        className='header-icon' 
                        name={clicked ? 'moon' : 'sun'} 
                        size='large'
                    />
                </Menu.Item>
                <Menu.Item>
                    <Icon className='header-icon' name='home icon' size='large'/>
                </Menu.Item>
                <Menu.Item>
                    <Icon className='header-icon' name='star' size='large'/>
                </Menu.Item>
                <Menu.Item name='avatar'>
                    <Image src='https://sites.google.com/site/heroespoderosos/_/rsrc/1397058950773/home/Estatua_de_cera_de_Luffy.png?height=330&width=400' size='tiny' avatar/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        /*<nav className="NavbarItems">
            <h1 className="navbar-logo">React bootcamp 2020 <i className="fab fa-react"></i></h1>
            
            <div className="search-bar">
                <SearchBar handleFormSubmit={handleSubmit}/>
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
        </nav> */
    );
}

export default Navbar;