import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useAuth } from '../../providers/Auth';

function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  const onClickHandle = () => {
    if (password === 'Rocks!' && username === 'wizeline') {
      login();
      history.push('/');
    }
  };
  return (
    <div style={{ marginTop: 60, padding: 30 }}>
      <Container>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    size="small"
                    variant="outlined"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={onClickHandle}
                color="primary"
                fullWidth
                variant="contained"
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Login;
