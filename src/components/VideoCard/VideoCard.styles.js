import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    padding: '12px 16px',
  },
  root: {
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '100%',
  },
  item: {
    display: 'flex',
    width: 360,
  },
  headerRoot: {
    flexDirection: 'row',
    alignItems: 'start',
    padding: '12px 12px 12px 0',
  },
  headerContent: {
    textAlign: 'left',
  },
  headerTitle: {
    letterSpacing: 'normal',
    lineHeight: '1.375rem',
    height: 44,
    fontWeight: 500,
    display: 'inline-block',
    fontSize: '1rem',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#606060',
    fontWeight: 400,
  },
  link: {
    display: 'block',
  },
  focusLink: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

export default useStyles;
