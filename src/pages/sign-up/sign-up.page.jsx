import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FormInput from '../../components/form-input';
import CustomButton from '../../components/custom-button';

import { auth, createUserProfileDocument } from '../../utils/js/firebase';

import './sign-up.styles.scss';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpPage() {
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const { displayName, email, password, confirmPassword } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log("passwords don't match");
      return;
    }

    console.log(state, email, password);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      setState({
        ...state,
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <div className='main'>
        <div className='header'>
          <h1>Sign up</h1>
        </div>
        <div className='body'>
          <form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              handleChange={handleChange}
              label='Display Name'
              required
            />
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
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              handleChange={handleChange}
              label='Confirm Password'
              required
            />
            <div className='buttons-bar-contianer'>
              <CustomButton type='submit'> Create account </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
