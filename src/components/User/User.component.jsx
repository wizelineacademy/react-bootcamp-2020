import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon.component';

const User = () => {
  return (
    <Link to="/login">
      <Icon
        iconName="user"
        className="fill-current dark:border-gray-800 dark:text-gray-800 text-gray-400 h-10 w-10 rounded-full border-2 border-gray-400"
      />
    </Link>
  );
};

export default User;
