import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchBarStyles';

function SearchBar() {
  const classes = useStyles();

  // const [searchTerm, setSearchTerm] = React.useState('');

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <div>
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
        />
      </div>
    </div>
  );
}

export default SearchBar;
