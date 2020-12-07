//File NavigationBar.jsx
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Navbar, Nav, Form, FormControl, NavItem } from 'react-bootstrap'
import { useAuth } from '../../providers/Auth';
import "../NavigationBar/NavigationBar.styles.css"

function NavigationBar(props) {
    const [search, setSearch] = useState('');
    const { logout } = useAuth();
    const history = useHistory();
    function deAuthenticate(event) {
        event.preventDefault();
        logout();
        history.push('/');
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.handleSearch(search);
    }
        return (
            <div className="nav-bar-container">
                <Navbar bg="light" className="nav-bar">
                    <Navbar.Brand className="nav-bar-brand" href="https://www.wizeline.com/" >
                        <img className="nav-brand-img" alt="" src="https://www.drupal.org/files/styles/grid-3/public/wizeline-isotype%402x%20%282%29.png?itok=B4Aa2Hxi" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="mr-auto">
                        <NavItem className="nav-item"><Link to="/main" className="nav-item-link">
                            Home</Link></NavItem>
                        <NavItem className="nav-item"><Link to="/favorites" className="nav-item-link">
                            Favorites</Link></NavItem>
                            {props.isSearchEnabled?(
                        <Form onSubmit={handleSubmit} className="nav-form" inline>
                            <FormControl onKeyDown={handleChange} onKeyUp={handleChange} type="text" placeholder="Search" className="mr-sm-2" />
                            <Button type="submit"variant="outline-success">Search</Button>
                        </Form>):(null)
                        }
                        <NavItem className="nav-item"><Link to="/" onClick={deAuthenticate} className="nav-item-logout">
                            Logout</Link></NavItem>
                    </Nav>
                </Navbar>
            </div>);
}

export default NavigationBar;