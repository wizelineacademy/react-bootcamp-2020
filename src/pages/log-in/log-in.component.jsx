import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';

import { auth, signInWithGoogle } from '../../utils/js/firebase';
import './log-in.styles.scss';

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
    <div className='sign-in-container'>
      <div className='main'>
        <div className='header'>
          <h1>Sign in</h1>
        </div>
        <div className='body'>
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
            <div className='buttons-bar-contianer'>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick={handleSignInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </div>
          </form>
        </div>

        <div className='new-user-container'>
          <p>
            New? <Link to='/signup'>Create an account.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
