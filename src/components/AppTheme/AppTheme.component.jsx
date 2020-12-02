import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useThemeContext } from '../../providers/ThemeProvider/Provider';
import HomePage from '../../pages/Home';
import DetailsPage from '../../pages/Details';
import NotFound from '../../pages/NotFound';
import FavoritePage from '../../pages/Favorite';
import Private from '../Private';
import Layout from '../Layout';

function AppTheme() {
  const { theme } = useThemeContext();

  const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${(props) => props.theme.body};
      color: ${(props) => props.theme.text}; 
      transition: 0.20s;
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/details/:id">
            <DetailsPage />
          </Route>
          <Private exact path="/favorites">
            <FavoritePage />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default AppTheme;