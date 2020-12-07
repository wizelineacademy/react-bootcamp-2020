import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';

import { auth, signInWithGoogle } from '../../utils/js/firebase';

import {
  SignInContainer,
  Main,
  Header,
  Body,
  ButtonsBarContainer,
  NewUserContainer,
} from './log-in.styles';

const initialState = {
  email: '',
  password: '',
};

function LogInPage() {
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newState = { ...state, [name]: value };
    setState(newState);
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle(() => {
      history.push('/');
    });
  };

  return (
    <SignInContainer>
      <Main>
        <Header>
          <h1>Sign in</h1>
        </Header>
        <Body>
          <form onSubmit={handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              label='Password'
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick={handleSignInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </ButtonsBarContainer>
          </form>
        </Body>

        <NewUserContainer>
          <p>
            New? <Link to='/signup'>Create an account.</Link>
          </p>
        </NewUserContainer>
      </Main>
    </SignInContainer>
  );
}

export default LogInPage;
