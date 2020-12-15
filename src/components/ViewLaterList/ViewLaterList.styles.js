import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    fontSize: 24,
    fontWeight: 400,
    marginTop: 12,
  },
  leftGrid: {
    padding: 24,
  },
  leftImg: {
    width: '100%',
  },
  root: {
    width: '100%',
    backgroundColor: '#F1F1F1',
  },
  imgThumb: {
    maxWidth: 168,
    marginRight: 16,
  },
}));

export default useStyles;
