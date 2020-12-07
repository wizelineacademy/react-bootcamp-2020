import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

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

export default function SearchVideos(props) {
  const classes = useStyles();
  const { onSubmit } = props;
  const submitValues = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <form onSubmit={submitValues}>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={
            <InputAdornment position="end">
              <Button
                aria-label="toggle password visibility"
                onClick={() => {
                  console.log('click');
                }}
                onMouseDown={() => {
                  console.log('mouse down');
                }}
                edge="end"
                className={classes.searchButton}
              >
                <SearchIcon />
              </Button>
            </InputAdornment>
          }
        />
      </div>
    </form>
  );
}
