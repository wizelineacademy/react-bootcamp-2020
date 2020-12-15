import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    maxWidth: 730,
    padding: 0,
    margin: '16px 0',
  },
  header: {
    padding: 4,
    alignItems: 'flex-start',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  detail: {
    color: '#030303',
    fontSize: 14,
    marginBottom: 0,
    '& p': {
      margin: 0,
    },
  },
  separator: {
    marginBottom: 16,
  },
}));

export default useStyles;
