import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useSearch } from '../../providers/Search/Search.provider';
import { InputStyled } from './Input.style';

function InputSearch() {
  const location = useLocation();
  const history = useHistory();
  const [term, setTerm] = useState(null);
  const { triggerSearchTerm, searchTerm } = useSearch();

  const onChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerSearchTerm(term);

      if (location.pathname !== '/') {
        history.push('/');
      }
    }
  };

  return (
    <>
      <InputStyled
        className="search-input"
        placeholder="search"
        prefix={<SearchOutlined />}
        defaultValue={searchTerm}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default InputSearch;
