import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import useStyles from './SearchVideos.styles';

export default function SearchVideos() {
  const classes = useStyles();
  const history = useHistory();
  const { term } = useParams();
  const [inputValue, setInputValue] = useState(term || '');
  const submitValues = (e) => {
    e.preventDefault();
    history.push(`/search/${inputValue}`);
  };
  return (
    <form onSubmit={submitValues}>
      <div className={classes.search}>
        <InputBase
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={
            <InputAdornment position="end">
              <Button
                type="submit"
                aria-label="toggle password visibility"
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
