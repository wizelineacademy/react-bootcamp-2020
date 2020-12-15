import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext/authContext';

function Private({ children, ...rest }) {
  const { authState } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() =>
        authState.user && authState.user.id ? children : <Redirect to="/" />
      }
    />
  );
}

export default Private;
