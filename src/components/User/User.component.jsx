import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Modal from '../Modal/index';

const User = ({ closeModal, isOpened }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const login = () => loginWithRedirect();
  const closeSession = () => {
    localStorage.setItem('videosFavourites', null);
    logout({ returnTo: window.location.origin });
  };

  return (
    <>
      <div className="group inline-block relative">
        <button
          type="button"
          className="bg-transparent inline-flex items-center focus:outline-none"
        >
          <div className="h-10 w-10 ml-4 mr-4 my-auto border border-3 border-white rounded-full">
            <img
              src={isAuthenticated ? user.picture : './user.jpg'}
              className="h-10 w-10 rounded-full border-2"
              alt=""
            />
          </div>
        </button>
        <ul className="rounded-md absolute hidden dark:bg-gray-700 dark:text-white text-gray-700 group-hover:block">
          <li className="">
            <button
              type="button"
              className="focus:outline-none rounded-md bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-gray-400 py-2 px-1 block whitespace-no-wrap"
              onClick={isAuthenticated ? closeSession : login}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </div>
      {!isAuthenticated && <Modal closeModal={closeModal} isOpened={isOpened} />}
    </>
  );
};

export default User;
