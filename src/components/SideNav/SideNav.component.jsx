import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import {
  Container,
  CustomLink,
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
  const history = useHistory();
  const { state, setState, authenticated } = useAuth();
  handleSideNav({ state, setState });

  return (
    <Container active={state.sidenav}>
      <List>
        <CustomLink onClick={() => history.push('/')}>
          <ListItem>
            <HomeIcon />
            <h4>Home</h4>
          </ListItem>
        </CustomLink>
        {authenticated && (
          <CustomLink onClick={() => history.push('/favorites')}>
            <ListItem>
              <PlaylistIcon />
              <h4>Favorites</h4>
            </ListItem>
          </CustomLink>
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
