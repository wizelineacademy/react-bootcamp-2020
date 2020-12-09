import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../hoc/Layout';
import Login from '../screens/login/Login';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Layout} />
    </Switch>
  );
};

export default AppRouter;
