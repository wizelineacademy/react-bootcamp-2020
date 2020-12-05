import React, { useContext, useState } from 'react';
import { StateContext } from '../../utils/State';
import { NavBar, InputStyled, SwitchStyled, LoginButton } from './Navbar.styled';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Login from './Login'


const Navbar = () => {

    const { DarkMode, setDarkMode, Sesion, setSesion, SearchVideo, setSearchVideo } = useContext(StateContext);
    const [SearchVideoNav, setSearchVideoNav] = useState(SearchVideo)
    const [OpenModal, setOpenModal] = useState("");

    const onChangeSesion = () => {
        if(Sesion){
            setSesion(null);
        } else {
            setOpenModal("Login");
        }
    }

    const Modals = {
        "Login": <Login onClose={() => setOpenModal("")} />
    };

    return (
        <NavBar>
            { Modals[OpenModal] }
            <InputStyled 
                value={SearchVideoNav}
                onChange={({target: { value }}) => setSearchVideoNav(value)}
                placeholder="Search..." 
                onPressEnter={() => setSearchVideo(SearchVideoNav)}
            />
            <SwitchStyled 
                checked={DarkMode} 
                onChange={setDarkMode} 
            />
            <LoginButton
                onClick={onChangeSesion}
            >
                <Tooltip 
                    title={Sesion ? "Logout" : "Login"} 
                >
                    {
                        (Sesion) ? (
                            <LogoutOutlined 
                                style={{ color: "white", fontSize: "1.8rem" }} 
                            />
                        ) : (
                            <LoginOutlined 
                                style={{ color: "white", fontSize: "1.8rem" }} 
                            />
                        )
                    }
                </Tooltip>
            </LoginButton>
        </NavBar>
    );
};

export default Navbar;