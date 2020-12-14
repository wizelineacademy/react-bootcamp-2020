import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Avatar } from '@material-ui/core';
import { useAuth } from '../../AuthContext';
export default function LogInAvatar() {

  const { user, logout } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/");
  }
  if (!user) {
    return (
      <Button
        color="inherit"
        onClick={() => history.push("/login")}>
        Login
      </Button>
    )
  }
  return (
    <Avatar alt={user.name} src={user.avatarUrl} onClick={handleLogout}/>
  )
}