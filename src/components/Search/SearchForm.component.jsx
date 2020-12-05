import React, { useContext } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import SearchContext from '../../state/SearchContext';
import useFormInput from '../../utils/hooks/useFormInput';

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const searchInput = useFormInput(searchTerm, setSearchTerm);

  return (
    <Form inline>
      <InputGroup>
        <input {...searchInput} placeholder="Search" className="form-control" />
      </InputGroup>
    </Form>
  );
}
