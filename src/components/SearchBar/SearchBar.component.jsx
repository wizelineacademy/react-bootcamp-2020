import React, { useContext, useState } from 'react';
// import { Redirect } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchBarStyles';
import youtube from '../../utils/yt_request';
import { YT_API_KEY } from '../../utils/constants';
import DataContext from '../../state/DataContext';

function SearchBar() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  // const [returnToGrid, setReturnToGrid] = useState(false);
  const { setItems } = useContext(DataContext);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleEnter = async (event) => {
    if (searchTerm && event.key === 'Enter') {
      youtube
        .get('/search', {
          params: {
            type: 'video',
            order: 'relevance',
            part: 'snippet',
            maxResults: 25,
            key: YT_API_KEY,
            q: searchTerm,
          },
        })
        .then((response) => {
          setItems(response.data.items);
          setSearchTerm('');
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          console.log('Terminé mi request');
        });
    }
  };
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
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
}

export default SearchBar;
