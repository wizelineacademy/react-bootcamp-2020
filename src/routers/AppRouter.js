import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
// import { AuthContext } from '../context/AuthContext';
import { GlobalContext } from '../context/GlobalContext';
import { DashBoardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user } = useContext(GlobalContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path='/login'
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            isAuthenticated={user.logged}
            path='/'
            component={DashBoardRouter}
          />
        </Switch>
      </div>
    </Router>
  );
};
