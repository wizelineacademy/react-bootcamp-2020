import React from 'react';
import { Link } from 'react-router-dom';

import './LoginStatus.styles.css';

export default function LoginStatus() {
  const LoginButton = (
    <Link className="LoginButton" to="/login">
      Login
    </Link>
  );
  return LoginButton;
}
