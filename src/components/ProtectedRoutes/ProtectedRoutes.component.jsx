import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children, component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route {...rest} render={() => (isAuthenticated ? children : <Redirect to="/" />)} />
  );
};

export default ProtectedRoute;
