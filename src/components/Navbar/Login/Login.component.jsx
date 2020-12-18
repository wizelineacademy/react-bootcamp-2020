import React, { useState, useContext } from 'react';
import { message, Modal, Row } from 'antd';
import { UserInput, PasswordInput, ButtonStyle } from './Login.styled';
import { StateContext } from '../../../utils/State';
import { ConfigContext } from '../../../utils/ConfigState';

const sesionInfo = {
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

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        if(user !== sesionInfo.User) return message.error("Wrong user");
        if(password !== sesionInfo.Password) return message.error("Wrong password");
        dispatchS({ type: "SET_SESSION", payload: sesionInfo });
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
                value={user}
                onChange={onTextChange(setUser)}
            />
            <PasswordInput 
                data-testid="PassInput"
                placeholder="Password"
                value={password}
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