import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../providers/Auth';
import './User.styles.css';

const UserParent = styled.div`
  height: 100px;
  padding: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

const Auth = styled.div`
  margin-left: 35px;
  font-size: 14px;
`;

function User(props) {
  const { authenticated, logout, login, userData } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
  function authenticate(event) {
    event.preventDefault();
    login("wizeline", "Rocks!");
    history.push('/');
  }
  return (
    <>
      <UserParent>
        <UserInfo>
          {userData.avatarUrl ? (
            <img width="25" height="25" alt="User" src={userData.avatarUrl} />
          ) : (
            <FontAwesomeIcon className="no-user-icon" icon={faUserCircle} />
          )}
          <UserName>{userData.name ? userData.name : 'Anonymous'}</UserName>
        </UserInfo>
        <Auth>
          {authenticated && (
            <Link to="/" onClick={deAuthenticate}>
              Logout
            </Link>
          )}
          {!authenticated && (
            <Link to="/" onClick={authenticate}>
              Login
            </Link>
          )}
        </Auth>
      </UserParent>
    </>
  );
}

export default User;
