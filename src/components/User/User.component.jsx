import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../providers/Auth';
import Modal from '../Modal/Modal.component';
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (authenticated) {
      handleClose();
    }
  }, [authenticated]);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
  }
  function authenticate(event) {
    event.preventDefault();
    handleShow();
  }

  function handleLogin(user, pass) {
    login(user, pass);
  }

  return (
    <>
      <UserParent>
        <UserInfo>
          {userData && userData.avatarUrl ? (
            <img width="25" height="25" alt="User" src={userData.avatarUrl} />
          ) : (
            <FontAwesomeIcon className="no-user-icon" icon={faUserCircle} />
          )}
          <UserName>{userData && userData.name ? userData.name : 'Anonymous'}</UserName>
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
      <Modal
        className="modal"
        show={show}
        handleClose={handleClose}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default User;
