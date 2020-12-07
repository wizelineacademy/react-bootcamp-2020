import React from 'react';

const DataContext = React.createContext({
  state: {},
  dispatch: () => {},
});

export default DataContext;
