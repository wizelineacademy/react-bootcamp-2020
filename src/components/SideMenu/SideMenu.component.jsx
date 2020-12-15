import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useLocation, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext/authContext';
import useStyles from './SideMenu.styles';

export default function SideMenu() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { authState } = useContext(AuthContext);
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar style={{ minHeight: 56 }} />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem
            selected={location.pathname === '/'}
            button
            onClick={() => history.push('/')}
            classes={{
              gutters: classes.listItemGutters,
              selected: classes.listItemSelected,
            }}
          >
            <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemPrimary }} primary="Home" />
          </ListItem>
          {authState.user && (
            <ListItem
              selected={location.pathname === '/viewlater'}
              onClick={() => history.push('/viewlater')}
              button
              classes={{
                gutters: classes.listItemGutters,
                selected: classes.listItemSelected,
              }}
            >
              <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemPrimary }}
                primary="Watch Later"
              />
            </ListItem>
          )}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader className={classes.listSubheaderRoot}>
              Subscriptions
            </ListSubheader>
          }
        >
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem
              classes={{
                gutters: classes.listItemGutters,
                selected: classes.listItemSelected,
              }}
              button
              key={text}
            >
              <ListItemIcon classes={{ root: classes.listItemIconRoot }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemPrimary }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
