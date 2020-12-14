import React from 'react';

const DataContext = React.createContext({
  items: {},
  setItems: () => {},
});

export default DataContext;
