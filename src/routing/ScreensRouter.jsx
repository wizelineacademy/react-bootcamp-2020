import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/home/Home';
import Detail from '../screens/detail/Detail';

const styles = {
  main: {
    padding: '3rem 6rem',
  },
};

const ScreensRouter = () => {
  return (
    <div style={styles.main}>
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default ScreensRouter;
