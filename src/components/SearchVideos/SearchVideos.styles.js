import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    search: {
      position: 'relative',
      borderRadius: 0, // theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      border: `1px solid ${theme.palette.border}`,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        height: '30%',
      },
    },
    searchButton: {
      backgroundColor: theme.palette.youtubePrimary,
      borderRadius: 0,
      border: 'none',
      top: 0,
      padding: '5px 12px',
      color: theme.palette.text.secondary,
      borderLeft: `1px solid ${theme.palette.border}`,
      '&:hover': {
        color: theme.palette.text.primary,
        // backgroundColor: 'rgba(0,0,0,0.08)',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: '1em',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30vw',
      },
    },
  };
});

export default useStyles;
