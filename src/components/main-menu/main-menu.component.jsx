import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import GradeIcon from '@material-ui/icons/Grade';

import './main-menu.styles.scss';

const MainMenu = ({ history }) => {
  const [mainMenuState, setMainMenuState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMainMenuState((prev) => open);
  };

  const list = (
    <div
      className='main-menu-list'
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key='Home' onClick={() => history.push(`/`)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button key='Favorites' onClick={() => history.push(`/favorites`)}>
          <ListItemIcon>
            <GradeIcon />
          </ListItemIcon>
          <ListItemText primary='Favorites' />
        </ListItem>
      </List>
      <div className='bottom'>
        <Divider />
        <List>
          <ListItem button key='Settings' onClick={() => history.push(`/settings`)}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment key='left'>
        <MenuIcon onClick={toggleDrawer(true)} />
        <Drawer anchor='left' open={mainMenuState} onClose={toggleDrawer(false)}>
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default withRouter(MainMenu);
