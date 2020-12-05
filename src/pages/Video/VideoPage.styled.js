import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    padding: 20,
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  video: {
    width: '100%',
    height: '500px',
  },
  details: {
    justifyContent: 'space-between',
    display: 'flex',
    boxSizing: 'border-box',
  },
  title: {
    paddingTop: '6px',
  },
}));
