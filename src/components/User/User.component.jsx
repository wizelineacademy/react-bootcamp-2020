import React from 'react';
import useUser from '../../hooks/userUser';

import Icon from '../Icon/index';
import Modal from '../Modal/index';
// import Button from '../Button/Button.component';

const User = ({ openModal, closeModal, isOpened }) => {
  const { isLogged, logout } = useUser();

  return (
    <>
      <div className="group inline-block relative">
        <button
          type="button"
          className="bg-transparent inline-flex items-center focus:outline-none"
        >
          <Icon
            iconName="user"
            className="fill-current dark:border-gray-800 dark:text-gray-800 text-gray-400 h-10 w-10 rounded-full border-2 border-gray-400"
          />
        </button>
        <ul className="rounded-md absolute hidden dark:bg-gray-700 dark:text-white text-gray-700 group-hover:block">
          <li className="">
            <button
              type="button"
              className="rounded-md bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-500 hover:bg-gray-400 py-2 px-1 block whitespace-no-wrap"
              onClick={isLogged ? logout : openModal}
            >
              {isLogged ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </div>
      <Modal closeModal={closeModal} isOpened={isOpened} />
    </>
  );
};

export default User;
