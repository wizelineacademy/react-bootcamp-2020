import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './LeftDrawerStyles';
import { useAuth } from '../../providers/Auth';

function LeftDrawer() {
  const classes = useStyles();
  const { authenticated } = useAuth();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          {authenticated ? (
            <Link to="/favorites" style={{ textDecoration: 'none' }}>
              <ListItem button key="Favorites">
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItem>
            </Link>
          ) : null}
        </List>
      </div>
    </Drawer>
  );
}

export default LeftDrawer;
