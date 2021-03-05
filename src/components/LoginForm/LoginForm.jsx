import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useAuth } from '../../providers/Auth/Auth.provider';
import LoginAlert from './LoginAlert';

export default function FormDialog(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useAuth();

  async function handleLogin() {
    const user = await login(username, password);
    if (user) {
      props.close();
    }
  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          {error && <LoginAlert />}
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
            type="text"
            color="secondary"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            disabled={loading}
            type="password"
            color="secondary"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="secondary" id="btn-cancel-login">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="secondary" id="btn-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
