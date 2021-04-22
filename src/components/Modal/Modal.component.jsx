/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useUser from '../../hooks/userUser';

// import { useAuth } from '../../providers/Auth';

const Modal = ({ onLogin }) => {
  const history = useHistory();

  const goBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      history.push('/');
    }
  }, [isLogged, history, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      {isLoginLoading && (
        <strong className="text-red-500 text-sm">Checking credentials...</strong>
      )}
      {!isLoginLoading && (
        <section>
          <div className="flex items-center h-screen w-full bg-teal-lighter">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
              <h1 className="block w-full text-center text-red-500 mb-6">
                {hasLoginError && <strong>Credentials are invalid</strong>}
              </h1>
              <form
                className="mb-4 md:flex md:flex-wrap md:justify-between"
                onSubmit={handleSubmit}
                method="post"
              >
                <div className="flex flex-col mb-4 md:w-full">
                  <label
                    className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                    htmlFor="username"
                  >
                    Email
                  </label>
                  <input
                    className="border py-2 px-3 text-grey-darkest"
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
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
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                  />
                </div>
                <div className="grid grid-cols-2 mx-auto gap-.5">
                  <div>
                    <button
                      className="block shadow-lg bg-green-400 hover:bg-green-500 text-white uppercase text-lg px-8 py-2 rounded"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <button
                      className="block shadow-lg bg-red-400 hover:bg-red-500 text-white uppercase text-lg px-10 py-2 rounded"
                      type="button"
                      onClick={goBack}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Modal;
