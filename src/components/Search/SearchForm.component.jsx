import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import SearchContext from '../../state/SearchContext';
import useFormInput from '../../utils/hooks/useFormInput';

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
      <input {...searchInput} placeholder="Search" className="form-control" />
    </form>
  );
}
