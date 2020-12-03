import React, { useContext } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import SearchContext from '../../state/SearchContext';
import useFormInput from '../../utils/hooks/useFormInput';

export default function SearchForm() {
  const { search, setSearch } = useContext(SearchContext);
  const searchInput = useFormInput(search, setSearch);

  return (
    <Form inline>
      <InputGroup>
        <input {...searchInput} placeholder="Search" className="form-control" />
      </InputGroup>
    </Form>
  );
}
