import React, { useContext, useState } from 'react';
import { StateContext } from '../../utils/State';
import { NavBar, InputStyled, SwitchStyled, LoginButton, BaseButton, InputContainer, LoginContainer, DarkModeStyled } from './Navbar.styled';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Login from './Login'
import { useHistory } from 'react-router';


const Navbar = () => {

    const { DarkMode, setDarkMode, Sesion, setSesion, SearchVideo, setSearchVideo, 
        Theme: { SecondaryColor, TextColor } } = useContext(StateContext);
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
        <NavBar
            color={SecondaryColor}
        >
            { Modals[OpenModal] }
            <InputContainer>
                <BaseButton
                    color={TextColor}
                    back={DarkMode ? "grey" : "white" }
                    onClick={() => history.push("/")}
                >
                    Home
                </BaseButton>
                {
                    (Sesion) && (
                        <BaseButton
                            color={TextColor}
                            back={DarkMode ? "grey" : "white" }
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
            </InputContainer>
            <LoginContainer>
                <SwitchStyled 
                    checked={DarkMode} 
                    onChange={setDarkMode} 
                />
                <DarkModeStyled
                    color={TextColor}
                >
                    Dark mode
                </DarkModeStyled>
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
            </LoginContainer>
        </NavBar>
    );
};

export default Navbar;