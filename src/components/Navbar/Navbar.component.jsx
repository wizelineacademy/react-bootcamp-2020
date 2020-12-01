import React, { useContext, useState } from 'react';
import { StateContext } from '../../utils/State';
import { NavBar, InputStyled, SwitchStyled, LoginButton } from './Navbar.styled';


const Navbar = ({ onSearchVideo }) => {

    const { DarkMode, setDarkMode } = useContext(StateContext);
    const [SearchVideo, setSearchVideo] = useState("")

    return (
        <NavBar>
            <InputStyled 
                value={SearchVideo} 
                onChange={({target: { value }}) => setSearchVideo(value)} 
                placeholder="Search..." 
                onPressEnter={() => onSearchVideo(SearchVideo)}
            />
            <SwitchStyled checked={DarkMode} onChange={setDarkMode} />
            <LoginButton>Login</LoginButton>
        </NavBar>
    );
};

export default Navbar;