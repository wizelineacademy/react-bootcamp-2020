import React, { useContext } from 'react';

import SearchContext from '../../state/SearchContext';
import useFormInput from '../../utils/hooks/useFormInput';

export default function SearchForm() {
  const { search, setSearch } = useContext(SearchContext);
  const searchInput = useFormInput(search, setSearch);

  return (
    <form>
      <input {...searchInput} />
      <button type="submit">Search</button>
    </form>
  );
}
