import React, { useReducer, useEffect, createContext, useContext } from 'react';

import { lightTheme, darkTheme } from '../../utils/theme';
import { userPreferencesReducer, initialState } from './UserPreferences.reducer';
import { doInvertTheme } from './UserPreferences.actions';
import { storage } from '../../utils/storage';
import { useAuth } from '../Auth';

const UserPreferencesContext = createContext(null);

function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

const userPreferencesStorageKey = 'USER-PREFERENCES';

function getUserStorageKey(user) {
  return user ? `${userPreferencesStorageKey}-${user.id}` : '';
}

const lazyInit = (user) => (state) => {
  const userStorageKey = getUserStorageKey(user);
  const storageObject = storage.get(userStorageKey);

  return {
    ...state,
    ...storageObject,
    theme: storageObject?.isLightThemeOn === false ? darkTheme : lightTheme,
  };
};

const UserPreferencesProvider = ({ children }) => {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(
    userPreferencesReducer,
    initialState,
    lazyInit(user)
  );

  useEffect(() => {
    const userStorageKey = getUserStorageKey(user);

    if (!user) {
      storage.set(userStorageKey, {
        isLightThemeOn: state.isLightThemeOn,
      });
      return;
    }

    storage.set(userStorageKey, {
      isLightThemeOn: state.isLightThemeOn,
    });
  }, [user, state.isLightThemeOn]);

  const value = {
    isLightThemeOn: state.isLightThemeOn,
    theme: state.theme,
    invertTheme: doInvertTheme(dispatch),
  };

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export { useUserPreferences };
export default UserPreferencesProvider;
