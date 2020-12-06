import React, { useContext } from 'react';

import SearchContext from '../../state/SearchContext';
import useFormInput from '../../utils/hooks/useFormInput';

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const searchInput = useFormInput(searchTerm, setSearchTerm);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input {...searchInput} placeholder="Search" className="form-control" />
    </form>
  );
}
