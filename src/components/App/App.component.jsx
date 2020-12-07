import React, { useReducer, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import AuthProvider from '../../providers/Auth';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Protected from '../Protected';
import Video from '../../pages/Video';
import Favorites from '../../pages/Favorites';
import MainAppBar from '../MainAppBar';
import LeftDrawer from '../LeftDrawer';
import DataContext from '../../state/DataContext';
import useStyles from './AppStyles';
import { defaultItems } from '../../mock/mockedData';
import FavoritesContext from '../../state/FavoritesContext';
import reducer from '../../state/FavoritesReducer';

const initialState = {
  favorites: [],
  currentFavorite: {},
};

function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [items, setItems] = useState(defaultItems);
  const values = { items, setItems };

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <DataContext.Provider value={values}>
          <div className={classes.root}>
            <CssBaseline />
            <MainAppBar />
            <LeftDrawer />

            <FavoritesContext.Provider
              value={{
                state,
                dispatch,
              }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/player/watch/:id" component={Video} />
                <Protected path="/player/:dataSource/:id" component={Video} />
                <Protected exact path="/favorites" component={Favorites} />
              </Switch>
            </FavoritesContext.Provider>
          </div>
        </DataContext.Provider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
