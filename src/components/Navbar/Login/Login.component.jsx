import React, { useState, useContext } from 'react';
import { message, Modal, Row } from 'antd';
import { UserInput, PasswordInput, ButtonStyle } from './Login.styled';
import { StateContext } from '../../../utils/State';

const SesionInfo = {
    User: "User",
    Password: "123"
};

const Login = ({ onClose }) => {

    const [User, setUser] = useState("");
    const [Password, setPassword] = useState("");
    const { setSesion } = useContext(StateContext);

    const onSubmit = () => {
        if(User !== SesionInfo.User) return message.error("Wrong user");
        if(Password !== SesionInfo.Password) return message.error("Wrong password");
        setSesion(SesionInfo);
        onClose();
    }
 
    return (
        <Modal
            centered
            visible
            footer={null}
            onCancel={onClose}
            width="24rem"
            bodyStyle={{ padding: "2rem" }}
            title="Login"
        >
            <UserInput 
                placeholder="Usuario"
                value={User}
                onChange={({target: { value }}) => setUser(value)}
            />
            <PasswordInput 
                placeholder="Contraseña"
                value={Password}
                onChange={({target: { value }}) => setPassword(value)}
            />
            <Row justify="space-between">
                <ButtonStyle
                    color="red"
                    onClick={onClose}
                >
                    Cancel
                </ButtonStyle>
                <ButtonStyle
                    color="blue"
                    onClick={onSubmit}
                >
                    Log In
                </ButtonStyle>
            </Row>
        </Modal>
    );
};

export default Login;