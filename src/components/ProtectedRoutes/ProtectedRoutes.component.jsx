import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUser from '../../hooks/userUser';

const ProtectedRoute = ({ children, component: Component, ...rest }) => {
  const { isLogged } = useUser();
  return <Route {...rest} render={() => (isLogged ? children : <Redirect to="/" />)} />;
};

export default ProtectedRoute;
