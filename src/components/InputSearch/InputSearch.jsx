import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearch } from '../../providers/Search/Search.provider';

function InputSearch() {
  const [term, setTerm] = useState(null);
  const { triggerSearchTerm, searchTerm } = useSearch();

  const onChange = (event) => {
    const { value } = event.target;
    setTerm(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerSearchTerm(term);
    }
  };

  return (
    <>
      <Input
        className="search-input"
        style={{ width: '200px' }}
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
