import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './Login.styles';
import ImageLoad from '../../ImageLoad';
import logo from '../../../assets/images/wizeline-academy-1.png';
import logoSmall from '../../../assets/images/wizeline-academy-1-small.jpg';

const useStyles = makeStyles(styles);

export default function Login() {
  const classes = useStyles();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const changeValue = (field, value) => {
    if (field === 'userName') return setUserName(value);
    if (field === 'password') return setPassword(value);
    if (field === 'remember') return setRememberMe(value);
    return null;
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log(userName, password, rememberMe);
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <ImageLoad
          className={classes.logo}
          src={logo}
          placeholder={logoSmall}
          alt="Wizeline"
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
                />
              }
              label="Remember me"
              color="secondary"
            />
            <Button
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
