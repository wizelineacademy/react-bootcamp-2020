import React from 'react';

import './UserInfo.styles.css';

export default function UserInfo() {
  return (
    <>
      <img
        className="userAvatar"
        src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png"
        alt="User avatar"
      />
      <span>Wizeline</span>
    </>
  );
}
