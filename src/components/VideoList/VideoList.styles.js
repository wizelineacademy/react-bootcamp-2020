import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    margin: '4px 8px',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    '&:last-child': {
      paddingBottom: 16,
    },
  },
  cover: {
    width: 168,
    minWidth: 168,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  title: {
    fontSize: 14,
    lineHeight: '16px',
    display: '-webkit-box',
    maxHeight: 32,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  subTitle: {
    fontSize: 13,
    lineHeight: '16px',
    marginTop: 4,
    color: '#606060',
  },
  link: {
    textDecoration: 'none',
  },
}));

export default useStyles;
