import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemPrimary: {
    fontSize: 14,
  },
  listSubheaderRoot: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: theme.palette.youtubeIconColor,
  },
  listItemIconRoot: {
    color: theme.palette.youtubeIconColor,
    minWidth: 48,
  },
  listItemGutters: {
    paddingLeft: 24,
    paddingTop: 6,
    paddingBottom: 5,
  },
  listItemSelected: {
    '& svg': {
      color: 'red',
    },
  },
}));

export default function SideMenu() {
  const classes = useStyles();
  const location = useLocation();
  console.log(location.pathname);
  const evaluateSelected = (key, exact = false) => {
    const p1 = location.pathname.split('/');
    const p2 = key.split('/');
    if (exact && p1.length !== p2.length) return false;
    try {
      for (let p2c = 0; p2c < p2.length; p2c += 1) {
        // console.log(p2[p2c], p1[p2c], p2c);
        if (p2[p2c].charAt(0) === ':' && p2c < p1.length) return true;
        if (p2[p2c] !== p1[p2c]) return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };
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
          <ListItem
            selected={evaluateSelected('/video/:id', true)}
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
