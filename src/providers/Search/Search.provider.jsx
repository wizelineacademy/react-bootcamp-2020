import React, { useState, useContext } from 'react';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchContext!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [query, setQuery] = useState('');

  return <SearchContext value={{ query, setQuery }}>{children}</SearchContext>;
}

export { useSearch };
export default SearchProvider;
