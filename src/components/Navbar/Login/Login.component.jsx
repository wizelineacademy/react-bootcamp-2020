import React, { useState, useContext } from 'react';
import { message, Modal, Row } from 'antd';
import { useHistory } from 'react-router';
import { UserInput, PasswordInput, ButtonStyle } from './Login.styled';
import { StateContext } from '../../../utils/State';

const SesionInfo = {
    User: "User",
    Password: "123"
};

const Login = () => {

    const [User, setUser] = useState("");
    const [Password, setPassword] = useState("");
    const { setSesion } = useContext(StateContext);
    const history = useHistory();

    const onSubmit = () => {
        if(User !== SesionInfo.User) return message.error("Wrong user");
        if(Password !== SesionInfo.Password) return message.error("Wrong password");
        setSesion(SesionInfo);
        history.push("/")
    }
 
    return (
        <Modal
            centered
            visible
            footer={null}
            onCancel={() => history.push("/")}
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
                    onClick={() => history.push("/")}
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