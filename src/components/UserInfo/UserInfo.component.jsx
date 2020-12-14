import React from 'react';

import './UserInfo.styles.css';

export default function UserInfo(userInfo) {
  return (
    <>
      <img className="userAvatar" src={userInfo.userInfo.avatarUrl} alt="User avatar" />
      <span>{userInfo.userInfo.name}</span>
    </>
  );
}
