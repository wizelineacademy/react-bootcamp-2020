/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/secret');
  }

  return (
    <section>
      <div className="flex items-center h-screen w-full bg-teal-lighter">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">Welcome</h1>
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            onSubmit={authenticate}
            method="post"
          >
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col mb-6 md:w-full">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border py-2 px-3 text-grey-darkest"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button
              className="block shadow-lg bg-green-300 hover:bg-green-400 text-white uppercase text-lg mx-auto px-12 py-2 rounded"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
