import React, { createContext, useContext, useState } from 'react';

const initialState = {
  isActive: false,
  user: null,
};

const UserContext = createContext(initialState);

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`Can't use "useUserContext" without an UserProvider!`);
  }
  return context;
}

const UserProvider = ({ children }) => {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));

  return (
    <UserContext.Provider
      value={{
        jwt,
        setJWT,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext };
export default UserProvider;
