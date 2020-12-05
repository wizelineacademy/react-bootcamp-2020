import React from 'react';
import styled from 'styled-components';

export default function SearchBar({ initSearchQuery, onChange }) {
  const [searchQuery, setSearchQuery] = React.useState(initSearchQuery);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const triggerChange = () => {
    if (searchQuery) {
      onChange(searchQuery);
      /*     } else {
      setError("Please, enter a pokemon name for testeing the branch");
 */
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerChange();
    }
  };

  const Input = styled.input`
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 50%;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
  `;

  return (
    <div className="search">
      <Input
        placeholder="eg. React Tutorials 2"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
