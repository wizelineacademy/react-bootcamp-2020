import React from 'react';
import { render, screen } from '@testing-library/react';

import UserInfo from '../UserInfo';

const userInfo = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

describe('user info component', () => {
  it('test render of the img', () => {
    render(<UserInfo userInfo={userInfo} />);
    expect(screen.getByAltText('User avatar')).toBeTruthy();
  });
});
