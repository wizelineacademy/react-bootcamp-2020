import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  Container,
  IconContainer,
  IconToggleOn,
  IconToggleOff,
  IconSearch,
  Avatar,
  IconSearchContainer,
} from './Buttons.styles';
import unlogged from '../../../images/unlogged.png';

import { useAuth } from '../../../providers/Auth';
import { storage } from '../../../utils/storage';

function Buttons() {
  const { state, setState, authenticated } = useAuth();
  const logged = storage.get('AUTH_STORAGE_USER');
  const history = useHistory();

  const handleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    setState({ ...state, theme: newTheme });
    storage.set('USER_THEME', newTheme);
  };

  useEffect(() => {
    const theme = storage.get('USER_THEME');
    setState({ ...state, theme });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Avatar onClick={() => history.push('/login')}>
        <img src={authenticated ? logged.avatarUrl : unlogged} alt="Profile" />
      </Avatar>

      <IconContainer onClick={handleTheme}>
        {state.theme === 'light' ? <IconToggleOff /> : <IconToggleOn />}
      </IconContainer>

      <IconSearchContainer>
        <IconSearch />
      </IconSearchContainer>
    </Container>
  );
}

export default Buttons;
