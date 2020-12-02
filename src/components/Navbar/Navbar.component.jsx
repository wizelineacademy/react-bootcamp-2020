import React, { useContext, useState } from 'react';
import { StateContext } from '../../utils/State';
import { NavBar, InputStyled, SwitchStyled, LoginButton } from './Navbar.styled';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useHistory, Route } from 'react-router';
import Login from './Login'


const Navbar = ({ onSearchVideo }) => {

    const { DarkMode, setDarkMode, Sesion, setSesion } = useContext(StateContext);
    const [SearchVideo, setSearchVideo] = useState("")
    const history = useHistory();

    const onChangeSesion = () => {
        if(Sesion){
            setSesion(null);
        } else {
            history.push("/login")
        }
    }

    return (
        <NavBar>
            <Route path="/login" 
                render={(props) => <Login {...props} /> } 
            />
            <InputStyled 
                value={SearchVideo} 
                onChange={({target: { value }}) => setSearchVideo(value)} 
                placeholder="Search..." 
                onPressEnter={() => onSearchVideo(SearchVideo)}
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