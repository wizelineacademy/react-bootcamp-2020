import React, { useContext, useState, useEffect, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useQuery } from 'react-query';
import styles from './Login.styles';
import ImageLoad from '../../ImageLoad';
import logo from '../../../assets/images/wizeline-academy-1.png';
import logoSmall from '../../../assets/images/wizeline-academy-1-small.jpg';
import auth from '../../../services/auth';
import { AuthContext } from '../../../contexts/authContext/authContext';
import { ResourceContext } from '../../../contexts/resourceContext/Resource';
import useLocalStorage from '../../../utils/hooks/useLocalStorage';

const useStyles = makeStyles(styles);

function storeUser(res, action, saveOnStorage) {
  if (res.data.length !== 1) return null;
  saveOnStorage(res.data[0]);
  action(res.data[0]);
}

export default function Login(props) {
  const { handleClose } = props;
  const classes = useStyles();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const { authActions } = useContext(AuthContext);
  const { resourceActions } = useContext(ResourceContext);
  const setUser = useLocalStorage('user', null)[1];

  const { refetch, status } = useQuery(
    ['/login', { user: userName, password }],
    auth.signIn,
    {
      refetchOnWindowFocus: false,
      enabled: false,
      cacheTime: 0,
      onSuccess: (data) => {
        storeUser(data, authActions.authStateChanged, setUser);
        handleClose();
      },
    }
  );
  const changeResourceStatus = useCallback(() => {
    resourceActions.changeResourceStatus('login', status);
  }, [status, resourceActions]);
  useEffect(() => {
    changeResourceStatus();
  }, [status, changeResourceStatus]);

  const changeValue = (field, value) => {
    if (field === 'userName') return setUserName(value);
    if (field === 'password') return setPassword(value);
    if (field === 'remember') return setRememberMe(value);
    return null;
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log(userName, password, rememberMe);
    refetch();
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <ImageLoad
          className={classes.logo}
          src={logo}
          placeholder={logoSmall}
          alt="Wizeline"
          data-testid="loginFormLogo"
        />
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={submitData} noValidate>
            <TextField
              onChange={(e) => changeValue('userName', e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="current-user-name"
              color="secondary"
              autoFocus
            />
            <TextField
              onChange={(e) => changeValue('password', e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              color="secondary"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => changeValue('remember', !rememberMe)}
                  value="remember"
                  color="secondary"
                  name="remember"
                />
              }
              label="Remember me"
              color="secondary"
            />
            <Button
              disabled={!userName || !password}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
