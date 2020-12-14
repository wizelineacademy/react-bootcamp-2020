import React from 'react';
import { useHistory } from 'react-router';
import { Button, Avatar } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';

export default function User() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  if (!user) {
    return <Button onClick={() => history.push('/login')}>Login</Button>;
  }

  return <Avatar alt={user.name} src={user.avatarUrl} onClick={handleLogout} />;
}
