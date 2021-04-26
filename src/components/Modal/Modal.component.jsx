import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useUser from '../../hooks/userUser';

const Modal = ({ isOpened, closeModal }) => {
  const modalContainer = document.querySelector('#modalContainer');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoginLoading, hasLoginError, isLogged, login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return isOpened && !isLogged
    ? ReactDOM.createPortal(
        <div className="bg-gray-500 bg-opacity-70 dark:bg-white dark:bg-opacity-70 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          {isLoginLoading && (
            <strong className="text-red-500 dark:text-white text-sm">
              Checking credentials...
            </strong>
          )}
          {!isLoginLoading && (
            <section>
              <div className="flex items-center h-screen w-full bg-teal-lighter">
                <div className="w-full bg-white dark:bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="bg-transparent dark:text-white text-black opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                  <div className="flex items-start justify-between p-5 rounded-t">
                    <h1 className="block w-full text-center text-red-500 mb-6 dark:text-white">
                      {hasLoginError && <strong>Credentials are invalid</strong>}
                    </h1>
                  </div>
                  <form
                    className="mb-4 md:flex md:flex-wrap md:justify-between"
                    onSubmit={handleSubmit}
                    method="post"
                  >
                    <div className="flex flex-col mb-4 md:w-full">
                      <label
                        className="mb-2 grid uppercase font-bold text-lg text-grey-darkest"
                        htmlFor="username"
                      >
                        Username
                        <input
                          className="border py-2 px-3 text-grey-darkest"
                          type="text"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="flex flex-col mb-6 md:w-full">
                      <label
                        className="mb-2 grid uppercase font-bold text-lg text-grey-darkest"
                        htmlFor="password"
                      >
                        Password
                        <input
                          className="border py-2 px-3 text-grey-darkest"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
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
                          onClick={closeModal}
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
        </div>,
        modalContainer
      )
    : null;
};

export default Modal;
