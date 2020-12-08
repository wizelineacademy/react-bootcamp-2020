import React from 'react';
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

  return (
    <Container>
      <Avatar onClick={() => history.push('/login')}>
        <img src={authenticated ? logged.avatarUrl : unlogged} alt="Profile" />
      </Avatar>

      <IconContainer onClick={() => setState({ ...state, mode: !state.mode })}>
        {state.mode ? <IconToggleOff /> : <IconToggleOn />}
      </IconContainer>

      <IconSearchContainer>
        <IconSearch />
      </IconSearchContainer>
    </Container>
  );
}

export default Buttons;
