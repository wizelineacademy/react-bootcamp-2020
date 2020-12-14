import React, { useState, useContext } from 'react';
import { message, Modal, Row } from 'antd';
import { UserInput, PasswordInput, ButtonStyle } from './Login.styled';
import { StateContext } from '../../../utils/State';
import { ConfigContext } from '../../../utils/ConfigState';

const SesionInfo = {
    User: "User",
    Password: "123"
};

const onTextChange = (callback) => (event) => {
    const { value } = event.target;
    callback(value);
};

const Login = ({ onClose, visible }) => {

    const { state: { Theme: { PrimaryColor, TextColor }, DarkMode } } = useContext(ConfigContext)
    const { dispatchS } = useContext(StateContext);

    const [User, setUser] = useState("");
    const [Password, setPassword] = useState("");

    const onSubmit = () => {
        if(User !== SesionInfo.User) return message.error("Wrong user");
        if(Password !== SesionInfo.Password) return message.error("Wrong password");
        dispatchS({ type: "SET_SESION", payload: SesionInfo });
        message.success(" Welcome user :) ")
        onClose();
    }
 
    return (
        <Modal
            centered
            visible={visible}
            footer={null}
            onCancel={onClose}
            closable={false}
            width="24rem"
            bodyStyle={{ padding: "2rem", background: PrimaryColor }}
        >
            <UserInput 
                data-testid="UserInput"
                placeholder="User"
                value={User}
                onChange={onTextChange(setUser)}
            />
            <PasswordInput 
                data-testid="PassInput"
                placeholder="Password"
                value={Password}
                onChange={onTextChange(setPassword)}
            />
            <Row justify="space-between">
                <ButtonStyle
                    data-testid="CancelButton"
                    color={TextColor}
                    back={DarkMode ? "grey" : "white" }
                    onClick={onClose}
                >
                    Cancel
                </ButtonStyle>
                <ButtonStyle
                    data-testid="LoginButton"
                    color={TextColor}
                    back={DarkMode ? "grey" : "white" }
                    onClick={onSubmit}
                >
                    Log In
                </ButtonStyle>
            </Row>
        </Modal>
    );
};

export default Login;