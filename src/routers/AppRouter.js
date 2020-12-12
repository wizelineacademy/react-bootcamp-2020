import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
// import { AuthContext } from '../context/AuthContext';
import { GlobalContext } from '../context/GlobalContext';
import { DashBoardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user, theme } = useContext(GlobalContext);
  const { isDark } = theme;
  const themeMode = isDark ? 'dark_mode' : 'ligth_mode';
  return (
    <Router>
      <div className={themeMode} style={{ height: '100vh' }}>
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
