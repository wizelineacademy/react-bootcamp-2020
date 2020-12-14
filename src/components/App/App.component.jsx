import React, { useReducer, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

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

const darkTheme = createMuiTheme({ palette: { type: 'dark' } });
const lightTheme = createMuiTheme({ palette: { type: 'light' } });

function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [items, setItems] = useState(defaultItems);
  const [darkMode, setDarkmode] = useState(false);
  const values = { items, setItems };
  const theme = createMuiTheme(darkMode ? darkTheme : lightTheme);

  const setMode = () => {
    setDarkmode(!darkMode);
  };

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <DataContext.Provider value={values}>
            <div className={classes.root}>
              <CssBaseline />
              <MainAppBar setMode={setMode} />
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
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
