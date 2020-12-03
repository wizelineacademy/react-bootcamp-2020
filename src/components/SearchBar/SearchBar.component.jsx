import React from 'react';
import './SearchBar.styles.css';

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

  return (
    <div className="search">
      <input
        type="text"
        className="search_input"
        placeholder="eg. React Tutorials"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
