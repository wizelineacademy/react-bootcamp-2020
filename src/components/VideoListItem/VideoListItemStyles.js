import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
  },
  cover: {
    height: 90,
    minWidth: 120,
    maxWidth: 120,
  },
}));

export default useStyles;
