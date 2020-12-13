import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { mount } from '../__mocks__/utils/MountComponent';
import LoginMenu from '../components/LoginMenu/LoginMenu';

describe('Login menu', () => {
  it('Mount login menu', () => {
    mount(<LoginMenu />);
    expect(true).toBe(true);
  });
  it('shows dialog on click', () => {
    mount(<LoginMenu />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByRole('menuitem')).toBeInTheDocument();

    const menuItem = screen.getByRole('menuitem');
    fireEvent.click(menuItem);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
  it('shows logout when user is logged in', async () => {
    mount(<LoginMenu />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByRole('menuitem')).toBeInTheDocument();

    const menuItem = screen.getByRole('menuitem');
    fireEvent.click(menuItem);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    const user = document.getElementById('username');
    const password = document.getElementById('password');
    fireEvent.change(user, { target: { value: 'wizeline' } });
    fireEvent.change(password, { target: { value: 'Rocks!' } });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('menuitem')).toHaveTextContent('Logout');
    });
    fireEvent.click(screen.getByRole('menuitem'));
  });
});
