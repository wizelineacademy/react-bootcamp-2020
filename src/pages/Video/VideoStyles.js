import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  // },
  content: {
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default useStyles;
