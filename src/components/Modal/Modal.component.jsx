/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

const Modal = () => {
  const history = useHistory();
  const { login } = useAuth();

  const goBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/secret');
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <section>
          <div className="flex items-center h-screen w-full bg-teal-lighter">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
              <h1 className="block w-full text-center text-grey-darkest mb-6">Login</h1>
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
                  className="block shadow-lg bg-green-400 hover:bg-green-500 text-white uppercase text-lg mx-auto px-12 py-2 rounded"
                  type="submit"
                >
                  Login
                </button>
                <button
                  className="block shadow-lg bg-red-400 hover:bg-red-500 text-white uppercase text-lg mx-auto px-12 py-2 rounded"
                  type="button"
                  onClick={goBack}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default Modal;
