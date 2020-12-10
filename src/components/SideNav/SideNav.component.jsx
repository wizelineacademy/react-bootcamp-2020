import React from 'react';
import { useAuth } from '../../providers/Auth';
import {
  Container,
  List,
  ListItem,
  HomeIcon,
  PlaylistIcon,
  Footer,
} from './SideNav.styles';

function handleSideNav({ state, setState }) {
  const screen = window.matchMedia('(max-width: 1100px)');
  const screenSmall = window.matchMedia('(max-width: 600px)');

  window.onresize = () => {
    if (screen.matches) {
      setState({
        ...state,
        sidenav: false,
      });
    } else {
      setState({
        ...state,
        sidenav: true,
      });
    }
    if (screenSmall.matches && !state.searchbarFocus) {
      setState({ ...state, searchbar: false });
    }
  };

  window.onload = () => {
    if (screen.matches) {
      setState({
        ...state,
        sidenav: false,
        searchbar: false,
      });
    } else {
      setState({
        ...state,
        sidenav: true,
        searchbar: true,
      });
    }
  };
}

function SideNav() {
  const { state, setState, authenticated } = useAuth();
  handleSideNav({ state, setState });

  return (
    <Container active={state.sidenav}>
      <List>
        <ListItem>
          <HomeIcon />
          <h4>Inicio</h4>
        </ListItem>
        {authenticated && (
          <ListItem>
            <PlaylistIcon />
            <h4>Favoritos</h4>
          </ListItem>
        )}
        <Footer>
          <span>☺ 2020 Ricardo Labarca</span>
        </Footer>
      </List>
    </Container>
  );
}

export function toggleSideNav({ state, setState }) {
  setState({
    ...state,
    sidenav: !state.sidenav,
  });
}

export default SideNav;
