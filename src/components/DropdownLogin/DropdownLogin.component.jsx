import React from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import './DropdownLogin.style.css';

function DropdownLogin() {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        Login
      </Menu.Item>
    </Menu>
  );

  return (<Dropdown overlay={menu} trigger={['click']} className="login-dropdown">
      <Button>
        <Avatar size="large" icon={<UserOutlined />} />
      </Button>
    </Dropdown>);
}

export default DropdownLogin;
