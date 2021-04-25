import { useCallback, useState } from 'react';
import { useUserContext } from '../context/userContext';
import loginApi from '../api/login.api';
import addFavouritesService from '../services/addFavourite';

export default function useUser() {
  const { favorites, jwt, setFavorites, setJWT } = useUserContext();
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });
      loginApi({ username, password })
        .then((resp) => {
          window.sessionStorage.setItem('jwt', resp);
          setState({ loading: false, error: false });
          setJWT(resp);
        })
        .catch((err) => {
          window.sessionStorage.removeItem('jwt');
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setJWT]
  );

  const addFavourite = useCallback(
    (videos) => {
      addFavouritesService(videos)
        .then(setFavorites)
        .catch((err) => {
          console.error(err);
        });
    },
    [setFavorites]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt');
    setJWT(null);
  }, [setJWT]);

  return {
    favorites,
    addFavourite,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}
