import React, { useContext, useState } from 'react';
import { StateContext } from '../../utils/State';
import { NavBar, InputStyled, SwitchStyled, LoginButton, BaseButton } from './Navbar.styled';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Login from './Login'
import { useHistory } from 'react-router';


const Navbar = () => {

    const { DarkMode, setDarkMode, Sesion, setSesion, SearchVideo, setSearchVideo } = useContext(StateContext);
    const [SearchVideoNav, setSearchVideoNav] = useState(SearchVideo)
    const [OpenModal, setOpenModal] = useState("");
    const history = useHistory();

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
            <BaseButton
                onClick={() => history.push("/")}
            >
                Home
            </BaseButton>
            {
                (Sesion) && (
                    <BaseButton
                        onClick={() => history.push("/favorites")}
                    >
                        Favorites
                    </BaseButton>
                )
            }
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