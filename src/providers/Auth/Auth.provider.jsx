import React, { useReducer, useEffect, useContext } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { loginUser, logoutUser } from './Auth.actions';
import { authReducer, initialState } from './Auth.reducer';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function lazyinit(state) {
  return {
    ...state,
    user: storage.get(AUTH_STORAGE_KEY),
  };
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState, lazyinit);

  useEffect(() => {
    if (state.user) {
      storage.set(AUTH_STORAGE_KEY, state.user);
    } else {
      storage.remove(AUTH_STORAGE_KEY);
    }
  }, [state.user]);

  const value = {
    loading: state.loading,
    user: state.user,
    error: state.error,
    login: loginUser(dispatch),
    logout: logoutUser(dispatch),
    isLoggedIn: Boolean(state.user),
  };

  return <AuthContext.Provider {...props} value={value} />;
}

export { useAuth };
export default AuthProvider;
