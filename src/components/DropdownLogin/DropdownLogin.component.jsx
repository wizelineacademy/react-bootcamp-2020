import React, { useState, useReducer } from 'react';
import { Menu, Dropdown, Avatar, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useModal from '../../utils/hooks/useModal';
import ModalComponent from '../Modal/Modal.component';
import './DropdownLogin.style.css';
import { useAuth } from '../../providers/Auth';
import loginApi from '../../utils/services/login';
import { storage } from '../../utils/storage';
import { AUTH_IMG_STORAGE_KEY } from '../../utils/constants';

const initialForm = {
  username: null,
  password: null,
};

function formReducer(prevState, { field, value }) {
  return {
    ...prevState,
    [field]: value,
  };
}

function DropdownLogin() {
  const [errorMsg, setErrorMsg] = useState(null);
  const { isShowing, toggle, setStatusModal } = useModal();
  const [state, dispatch] = useReducer(formReducer, initialForm);
  const { login, logout, authenticated } = useAuth();

  const handleSubmit = () => {
    const { username, password } = state;
    if (username && password) {
      loginApi(username, password)
        .then((result) => {
          login(result);
          setStatusModal(false);
        })
        .catch(() => {
          setErrorMsg('Something is wrong in your credentials, Please try again');
        });
    } else {
      setErrorMsg('Please fill the inputs.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ field: name, value });
  };

  const triggerLogout = () => {
    logout();
  };

  const menu = (
    <Menu>
      {!authenticated ? (
        <Menu.Item key="1" onClick={toggle}>
          Login
        </Menu.Item>
      ) : null}
      {authenticated ? (
        <Menu.Item key="1" onClick={triggerLogout}>
          Logout
        </Menu.Item>
      ) : null}
    </Menu>
  );

  const { username, password } = state;
  return (
    <>
      <Dropdown overlay={menu} trigger={['click']} className="login-dropdown">
        <Button>
          {authenticated ? (
            <Avatar size="large" src={storage.get(AUTH_IMG_STORAGE_KEY)} />
          ) : (
            <Avatar size="large" icon={<UserOutlined />} />
          )}
        </Button>
      </Dropdown>
      <ModalComponent
        show={isShowing}
        toggle={toggle}
        handleSubmit={handleSubmit}
        title="Login"
      >
        <form className="form-login">
          <div className="form-item">
            <Input
              name="username"
              placeholder="Username"
              prefix={<UserOutlined />}
              onChange={handleChange}
              defaultValue={username}
            />
          </div>

          <div className="form-item">
            <Input.Password
              name="password"
              placeholder="Password"
              prefix={<LockOutlined />}
              onChange={handleChange}
              defaultValue={password}
            />
          </div>
          {errorMsg ? <div className="form-item error">{errorMsg}</div> : null}
          <div className="form-footer textRight">
            <Button type="primary" htmlType="button" onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </form>
      </ModalComponent>
    </>
  );
}

export default DropdownLogin;
