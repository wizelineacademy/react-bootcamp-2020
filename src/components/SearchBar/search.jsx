import React from 'react';
import youtube from '../../utils/yt_request';
import { YT_API_KEY } from '../../utils/constants';

function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [videoItems, setVideoItems] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnter = async (event) => {
    if (searchTerm && event.key === 'Enter') {
      console.log(`Debo buscar ${searchTerm}`);
      youtube
        .get('/search', {
          params: {
            type: 'video',
            order: 'relevance',
            part: 'snippet',
            maxResult: 25,
            key: YT_API_KEY,
            q: searchTerm,
          },
        })
        .then((response) => {
          console.log(response.data.items);
          setVideoItems([]);
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
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <p>{videoItems}</p>
    </div>
  );
}

export default SearchBar;
