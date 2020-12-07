import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from '../../providers/Auth';

import './LoginStatus.styles.css';

export default function LoginStatus() {
  // const { authenticated } = useAuth();

  const LoginButton = (
    <Link className="LoginButton" to="/login">
      Login
    </Link>
  );

  return LoginButton;
}
