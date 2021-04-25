import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Icon from '../Icon/Icon.component';
// import Button from '../Button/Button.component';

const User = () => {
  const location = useLocation();

  return (
    <>
      <Link
        to={{
          pathname: '/login',
          state: { background: location },
        }}
      >
        <button
          type="button"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          id="btn"
          aria-describedby="tooltip"
          data-tooltip-text="Anything"
        >
          <Icon
            iconName="user"
            className="fill-current dark:border-gray-800 dark:text-gray-800 text-gray-400 h-10 w-10 rounded-full border-2 border-gray-400"
          />
        </button>
      </Link>
      <div
        className="text-sm mt-2 bg-gray-600 text-gray-100 px-1 absolute rounded bg-opacity-50 shadow-xl hidden"
        id="tooltip"
        role="tooltip"
      />
    </>
  );
};

export default User;
