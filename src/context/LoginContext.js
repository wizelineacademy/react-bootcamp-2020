/* eslint-disable */
import React from 'react';

const LoginContext = React.createContext({
  username: '',
  setUsername: () => {},
  password: '',
  setPassword: () => {},
});

export default LoginContext;
