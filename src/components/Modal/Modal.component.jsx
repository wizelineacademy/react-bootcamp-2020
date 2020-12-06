import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../providers/Auth';

const ModalContainer = styled.div`
  display: ${(props) => props.show};
  position: fixed;
  z-index: 1;
  padding: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  background-color: ${(props) => props.theme.body};
  margin: auto;
  border: 1px solid ${(props) => props.theme.divider};
  width: 30%;
  border-radious: 5px;
`;

const Header = styled.div`
  height: 100px;
  padding-left: 10px;
  text-align: right;
  background-color: ${(props) => props.theme.background};
  display: flex;
`;

const Title = styled.h1`
  font-size: 0.8rem;
  color: #c1c1c1;
`;

const Close = styled.span`
  cursor: pointer;
  float: right;
  font-size: 20px;
  margin: 0;
  padding: 10px;
  line-height: 0px;
`;

const Body = styled.div`
  padding: 10px 15px;
  text-align: center;
  margin-bottom: 20px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

const ItemPlay = styled.div`
  width: 50px;
  height: 50px;
  background-color: #18a67b;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 13px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  padding: 6px;
  font-size: 17px;
  border-width: 1px;
  border-color: #CCCCCC;
  background-color: #FFFFFF;
  color: #000000;
  border-style: solid;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  padding: 6px;
  font-size: 17px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #cecece;
  color: #fff;
  border-style: solid;
  border-radius: 4px;
`;

const Error = styled.h1`
  font-size: 0.8rem;
  color: tomato;
  margin: auto;
`;

function Modal(props) {
  const [user, setUser] = useState('');
  const [password, setpassword] = useState('');
  const [errorLabel, setErrorLabel] = useState('');

  const { show, handleClose, handleLogin } = props;
  const { error, authenticated } = useAuth();

  const login = () => {
    handleLogin(user, password);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  useEffect(() => {
    setErrorLabel(error);
  }, [error]);

  useEffect(() => {
    if (show) {
      setUser('');
      setpassword('');
      setErrorLabel('');
    }
  }, [show]);

  const close = () => {
    setUser('');
    setpassword('');
    setErrorLabel('');
    handleClose();
  };

  return (
    <ModalContainer show={show && !authenticated ? 'block' : 'none'}>
      <Content>
        <Header>
          <ItemPlay>
            <FontAwesomeIcon icon={faPlay} style={{ color: '#fff' }} />
          </ItemPlay>
          <Close onClick={close}> x </Close>
        </Header>
        <Body>
          <Title>Login to the application</Title>
          <Row>
            <Input type="text" value={user} placeholder="User" onChange={handleUser} />
          </Row>
          <Row>
            <Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={handlePassword}
            />
          </Row>
          <Row>
            <Button onClick={login}>Log in</Button>
          </Row>
          <Row>
            <Error>{errorLabel} </Error>
          </Row>
        </Body>
      </Content>
    </ModalContainer>
  );
}

export default Modal;
