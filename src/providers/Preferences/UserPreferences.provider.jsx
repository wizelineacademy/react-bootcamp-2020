import React, { useReducer, useEffect, createContext, useContext } from 'react';

import { lightTheme, darkTheme } from '../../utils/theme';
import { userPreferencesReducer, initialState } from './UserPreferences.reducer';
import { addFavorite, doInvertTheme, removeFavorite } from './UserPreferences.actions';
import { storage } from '../../utils/storage';
import { USER_PREFERENCES_STORAGE_KEY } from '../../utils/constants';
import { useAuth } from '../Auth';

const UserPreferencesContext = createContext(null);

function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function getUserStorageKey(user) {
  return user ? `${USER_PREFERENCES_STORAGE_KEY}-${user.id}` : '';
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
  function isFavorite(video) {
    return state.favorites.find((favorite) => favorite.id === video.id);
  }

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
      favorites: state.favorites,
    });
  }, [user, state.isLightThemeOn, state.favorites]);

  const value = {
    isLightThemeOn: state.isLightThemeOn,
    theme: state.theme,
    invertTheme: doInvertTheme(dispatch),
    favorites: state.favorites,
    isFavorite,
    addFavorite: addFavorite(dispatch),
    removeFavorite: removeFavorite(dispatch),
  };

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export { useUserPreferences };
export default UserPreferencesProvider;
