import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { SearchForm } from './SearchInput.styles';
import { useAppDataContext } from '../../providers/AppData';
import actions from '../../state/actions';

const SearchInput = () => {
  const { dispatch } = useAppDataContext();
  const history = useHistory();
  const [search, setSearch] = useState('');

  const handleOnChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch({ type: actions.SET_SEARCH_STRING, payload: search });
    history.push('/');
  };

  return (
    <SearchForm onSubmit={(e) => handleOnSubmit(e)}>
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input onChange={handleOnChange} placeholder="type and search..." type="search" />
    </SearchForm>
  );
};

export default SearchInput;
