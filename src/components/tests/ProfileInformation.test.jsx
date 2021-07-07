import React from 'react';

import { render, screen } from '@testing-library/react';
import ProfileInformation from '../ProfileInformation/ProfileInformation.component';
import AuthProvider from '../../providers/Auth';

describe('ProfileInformation', () => {
  it('it loads default', () => {
    const defaultImage =
      'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg';
    render(
      <AuthProvider>
        <ProfileInformation />
      </AuthProvider>
    );
    const img = screen.queryByRole('img');
    const atribute = img.getAttribute('src');
    expect(atribute).toBe(defaultImage);
  });
});
