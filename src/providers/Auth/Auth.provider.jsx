import React, { useState, useEffect, useContext, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../GloblaStyles';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import Youtube from '../../utils/Youtube';
import LoginApi from '../../utils/loginApi';

const AuthContext = React.createContext({});

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const localVideoStoraged = storage.get('localVideoStoraged');
  const storagedTheme = storage.get('USER_THEME');
  const [state, setState] = useState({
    sidenav: true,
    searchString: 'wizeline',
    theme: storagedTheme || 'dark',
    isLoading: false,
  });

  useEffect(() => {
    async function fetchYoutubeData() {
      const videoList = await Youtube.get(state.searchString);
      const videoListBackup = {
        videos: videoList,
        searchString: state.searchString,
      };
      storage.set('localVideoStoraged', videoListBackup);
      setState({
        ...state,
        isLoading: false,
        videos: videoList,
      });
    }
    if (!state.isLoading && !localVideoStoraged?.videos) {
      fetchYoutubeData();
    } else {
      setState({
        ...state,
        videos: localVideoStoraged.videos,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchYoutubeData() {
      const videosFounded = await Youtube.get(state.searchString);
      setState({
        ...state,
        isLoading: false,
        videos: videosFounded,
      });
    }
    if (state.isLoading) fetchYoutubeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLoading]);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(async (user) => {
    try {
      const mockedUser = await LoginApi(user);
      setAuthenticated(true);
      storage.set(AUTH_STORAGE_KEY, true);
      storage.set('AUTH_STORAGE_USER', mockedUser);
      return true;
    } catch (err) {
      return err.toString();
    }
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set('AUTH_STORAGE_USER', false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, state, setState }}>
      <ThemeProvider theme={state.theme === 'light' ? theme.light : theme.dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
