import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/home/Home';
import Detail from '../screens/detail/Detail';

const ScreensRouter = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/fav" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default ScreensRouter;
