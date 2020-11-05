import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ children, ...rest }) {
  const { authenticated } = useAuth();

  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
