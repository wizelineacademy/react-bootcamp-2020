import React, { useState, useContext, useCallback } from 'react';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('wizeline');

  const triggerSearchTerm = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  return (
    <SearchContext.Provider value={{ triggerSearchTerm, searchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
