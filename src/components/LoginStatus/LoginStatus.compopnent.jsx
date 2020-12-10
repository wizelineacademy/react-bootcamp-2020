import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import UserInfo from '../UserInfo';
import MenuProfile from '../MenuProfile';

import './LoginStatus.styles.css';

export default function LoginStatus() {
  const { authenticated, userInfo } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  let returnValue = '';
  if (authenticated) {
    returnValue = (
      <div
        className="profile-wrapper"
        aria-hidden="true"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        onKeyPress={() => {
          setShowMenu(showMenu);
        }}
      >
        <UserInfo userInfo={userInfo} />
        {showMenu ? <MenuProfile /> : null}
      </div>
    );
  } else {
    returnValue = (
      <Link className="LoginButton" to="/login">
        Login
      </Link>
    );
  }

  return <div className="LoginStatus">{returnValue}</div>;
}
