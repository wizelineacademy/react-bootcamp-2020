import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useAuth } from '../../providers/Auth/Auth.provider';
import useStyles from './Menu.styled';

export default function PrincipalMenu() {
  const { push } = useHistory();
  const classes = useStyles();
  const { isLoggedIn } = useAuth();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list}>
        <ListItem button key="Home" onClick={() => push('/')}>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      {isLoggedIn && (
        <>
          <ListItem button key="Favorites" onClick={() => push('/secret')}>
            <ListItemText primary="Favorites" />
          </ListItem>
        </>
      )}
    </div>
  );
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            className={classes.menuButton}
            edge="start"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon>{anchor}</MenuIcon>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
