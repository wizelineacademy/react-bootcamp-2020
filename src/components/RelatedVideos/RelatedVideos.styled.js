import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    width: '35%',
    height: '100%',
    overflow: 'scroll',
  },
  videoItem: {
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  imgMini: {
    width: '120px',
    height: '90px',
    margin: 5,
  },
}));
