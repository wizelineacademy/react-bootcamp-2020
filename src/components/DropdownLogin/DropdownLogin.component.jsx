import React, { useReducer } from 'react';
import { Menu, Dropdown, Avatar, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useModal from '../../utils/hooks/useModal';
import ModalComponent from '../Modal/Modal.component';
import './DropdownLogin.style.css';

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
  const { isShowing, toggle, setStatusModal } = useModal();
  const [state, dispatch] = useReducer(formReducer, initialForm);

  const handleSubmit = () => {
    setStatusModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ field: name, value });
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={toggle}>
        Login
      </Menu.Item>
    </Menu>
  );

  const { username, password } = state;

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']} className="login-dropdown">
        <Button>
          <Avatar size="large" icon={<UserOutlined />} />
        </Button>
      </Dropdown>
      <ModalComponent
        show={isShowing}
        toggle={toggle}
        handleSubmit={handleSubmit}
        title="Login"
      >
        <form onSubmit={handleSubmit} className="form-login">
          <div className="form-item">
            <Input
              placeholder="Username"
              prefix={<UserOutlined />}
              onChange={handleChange}
              defaultValue={username}
            />
          </div>

          <div className="form-item">
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined />}
              onChange={handleChange}
              defaultValue={password}
            />
          </div>

          <div className="form-footer textRight">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </form>
      </ModalComponent>
    </>
  );
}

export default DropdownLogin;
