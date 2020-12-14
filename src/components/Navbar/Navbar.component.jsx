import React, { useContext, useState } from 'react';
import { StateContext } from '../../utils/State';
import { ConfigContext } from '../../utils/ConfigState';
import { VideoContext } from '../../utils/VideoState';
import { NavBar, InputStyled, SwitchStyled, LoginButton, BaseButton, InputContainer, LoginContainer, DarkModeStyled } from './Navbar.styled';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import Login from './Login'
import { useHistory } from 'react-router';


const Navbar = () => {

    const { state: { Theme: { SecondaryColor, TextColor }, DarkMode }, dispatchC } = useContext(ConfigContext)
    const { state: { SearchVideo }, dispatchV } = useContext(VideoContext);
    const { state: { Sesion }, dispatchS } = useContext(StateContext);
    
    const [SearchVideoNav, setSearchVideoNav] = useState(SearchVideo)    
    const [OpenModal, setOpenModal] = useState(false);
    const history = useHistory();

    const onChangeSesion = () => {
        if(Sesion){
            dispatchS({
                type: "SET_SESION",
                payload: null
            });
        } else {
            setOpenModal(true);
        }
    }

    return (
        <NavBar
            data-testid="NavBar"
            color={SecondaryColor}
        >
            <Login 
                onClose={() => setOpenModal(false)} 
                visible={OpenModal}
            />
            <InputContainer>
                <BaseButton
                    data-testid="ButtonHome"
                    color={TextColor}
                    back={DarkMode ? "grey" : "white" }
                    onClick={() => history.push("/")}
                >
                    Home
                </BaseButton>
                {
                    (Sesion) && (
                        <BaseButton
                            data-testid="ButtonFavorites"
                            color={TextColor}
                            back={DarkMode ? "grey" : "white" }
                            onClick={() => history.push("/favorites")}
                        >
                            Favorites
                        </BaseButton>
                    )
                }
                <InputStyled 
                    data-testid="InputNavBar"
                    value={SearchVideoNav}
                    onChange={({target: { value }}) => setSearchVideoNav(value)}
                    placeholder="Search..." 
                    onPressEnter={() => dispatchV({
                        type: "SET_SEARCH_VIDEO",
                        payload: SearchVideoNav
                    })}
                />
            </InputContainer>
            <LoginContainer>
                <SwitchStyled 
                    data-testid="SwitchNavBar"
                    checked={DarkMode} 
                    onChange={(value) => dispatchC({
                        type: "SET_DARK_MODE",
                        payload: value
                    })} 
                />
                <DarkModeStyled
                    data-testid="DarkMode"
                    color={TextColor}
                >
                    Dark mode
                </DarkModeStyled>
                <LoginButton
                    data-testid="LoginButton"
                    onClick={onChangeSesion}
                >
                    <Tooltip 
                        title={Sesion ? "Logout" : "Login"} 
                    >
                        {
                            (Sesion) ? (
                                <LogoutOutlined
                                    data-testid="LogoutIcon"
                                    style={{ color: "white", fontSize: "1.8rem" }} 
                                />
                            ) : (
                                <LoginOutlined 
                                    data-testid="LoginIcon"
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