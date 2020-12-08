import React, { useReducer, useMemo } from 'react';
import reducer, { initialState } from './reducer';
import actions from './actions';

const ResourceContext = React.createContext({});

const ResourceProvider = (props) => {
  const [resourceState, dispatch] = useReducer(reducer, initialState);
  const resourceActions = useMemo(() => actions(dispatch), []);

  return (
    <ResourceContext.Provider
      value={{
        resourceState,
        resourceActions,
      }}
    >
      {props.children}
    </ResourceContext.Provider>
  );
};

export { ResourceProvider, ResourceContext };
