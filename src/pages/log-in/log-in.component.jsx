import React, { useState } from 'react';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';

import { auth, signInWithGoogle } from '../../utils/js/firebase';
import './log-in.styles.scss';

const initialState = {
  email: '',
  password: '',
};

function LogInPage() {
  const [state, setState] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ ...state, email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const newState = { ...state, [name]: value };
    setState(newState);
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
              value={state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={state.password}
              handleChange={handleChange}
              label='password'
              required
            />
            <div className='buttons-bar-contianer'>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
