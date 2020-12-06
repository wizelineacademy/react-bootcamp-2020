import React, { useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { useVideo } from '../../providers/Video/Video.provider';
import useStyles from './SearchBar.styled';

export default function SearchBar() {
  const { searchItem, setSearchItem, fetchVideos } = useVideo();
  const classes = useStyles();

  const handleSearchItemChange = (event) => {
    setSearchItem(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchVideos(searchItem);
    }
  };

  useEffect(() => {
    fetchVideos(searchItem);
    console.log('here');
  }, []);

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
