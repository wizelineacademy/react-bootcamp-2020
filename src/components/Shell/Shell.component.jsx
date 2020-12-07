import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

const NavigationBar = styled.section`
  display: flex;
  height: 60px;
  width: 100vw;
  background: #2e2e2e;
  align-items: center;
  justify-content: flex-end;
`;

const LinkWrapper = styled.span`
  margin: 5px 10px;
  cursor: pointer;
`;

const Content = styled.section`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
`;

const Shell = ({ children }) => {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  return (
    <>
      <NavigationBar>
        <LinkWrapper>
          <Link to="/"> Home </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link to="/search"> Search </Link>
        </LinkWrapper>
        {authenticated ? (
          <>
            <LinkWrapper>
              <Link to="/favorites"> Favorites </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link to="/" onClick={deAuthenticate}>
                ← Logout
              </Link>
            </LinkWrapper>
          </>
        ) : (
          <LinkWrapper>
            <Link to="/login">Login →</Link>
          </LinkWrapper>
        )}
      </NavigationBar>
      <Content>{children}</Content>
    </>
  );
};

export default Shell;
