import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { VideoContext } from '../../providers/Video';

function Search() {
  const history = useHistory();
  const { searchSentence, setSearchSentence, getVideos } = useContext(VideoContext);

  const searchVideos = () => {
    getVideos();
    history.push('/');
  }
  return (<>
  <input
        type="text"
        placeholder="Search"
        required
        value={searchSentence}
        onChange={(event) => setSearchSentence(event.target.value)}
        onKeyDown={(event) => { if (event.key === 'Enter') searchVideos() }}
    />
    <button type="submit" onClick={searchVideos}>
      Buscar
    </button></>)
}

export default Search;