import { makeStyles } from '@material-ui/core/styles';

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
    color: theme.palette.type !== 'dark' ? theme.palette.youtubeIconColor : null,
  },
  listItemIconRoot: {
    color: theme.palette.type !== 'dark' ? theme.palette.youtubeIconColor : null,
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

export default useStyles;
