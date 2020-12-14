import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { useVideo } from '../../providers/Video/Video.provider';
import useStyles from './SearchBar.styled';

export default function SearchBar() {
  const { searchItem, setSearchItem, fetchVideos } = useVideo();
  const classes = useStyles();
  const location = useLocation();
  const { push } = useHistory();

  const handleSearchItemChange = (event) => {
    setSearchItem(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchVideos(searchItem);
      if (location.pathname !== '/') {
        push('/');
      }
    }
  };

  useEffect(() => {
    fetchVideos(searchItem);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleSearchItemChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
