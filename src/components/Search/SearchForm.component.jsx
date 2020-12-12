import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import SearchContext from '../../state/SearchContext';
import useFormInput from '../../utils/hooks/useFormInput';
import { SEARCH_PLACEHOLDER } from '../../utils/constants';

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const searchInput = useFormInput(searchTerm, setSearchTerm);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        {...searchInput}
        name="search"
        type="search"
        placeholder={SEARCH_PLACEHOLDER}
        className="form-control"
      />
    </form>
  );
}
