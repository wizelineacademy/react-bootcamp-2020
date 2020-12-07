import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInputContainer = styled.div`
  margin: 10px;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 250px;
  padding: 0.4rem 0.6rem;
  background-color: #eeeeee;
  border: solid 1px #eaeaea;
`;

const Button = styled.button`
  cursor: pointer;
  width: 5rem;
  margin-left: 0.5rem;
  padding: 0.4rem 0.4rem;
  border: none;
  border-radius: 3px;
`;

const SearchInput = ({ searchText, onChange }) => {
  const [text, setText] = useState(searchText);

  const triggerSearch = () => {
    if (text) {
      onChange(text);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerSearch();
    }
  };

  return (
    <SearchInputContainer>
      <Input
        type="text"
        value={text}
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button className="dynamic-gradient" onClick={triggerSearch} disabled={!text}>
        Search
      </Button>
    </SearchInputContainer>
  );
};

export default SearchInput;
