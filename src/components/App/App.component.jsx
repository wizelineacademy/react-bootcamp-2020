import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import AuthProvider from '../../providers/Auth';
import Home from '../../pages/Home';
import Protected from '../Protected';
import Video from '../../pages/Video';
import MainAppBar from '../MainAppBar';
import LeftDrawer from '../LeftDrawer';
import useStyles from './AppStyles';

function App() {
  const classes = useStyles();

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <MainAppBar />
          <LeftDrawer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/player/:id" component={Video} />
            <Protected path="/favorites" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
