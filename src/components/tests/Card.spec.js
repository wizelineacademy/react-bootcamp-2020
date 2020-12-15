import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../card/Card';

const propsIsHome = {
  thumbnail: '..',
  title: 'Wizeline one',
  description: 'The greatest video!',
  isHome: true,
};

const propsIsNotHome = {
  thumbnail: '..',
  title: 'Wizeline one',
  description: 'The greatest video!',
  isHome: false,
};

describe('Card component', () => {
  describe('With isHome flag equals true', () => {
    it('selects title of card', () => {
      render(<Card {...propsIsHome} />);
      expect(screen.getByText('Wizeline one')).toBeTruthy();
    });

    it('selects description of card', () => {
      render(<Card {...propsIsHome} />);
      expect(screen.getByText('The greatest video!')).toBeTruthy();
    });
  });

  describe('With isHome flag equals false', () => {
    it('selects title of card', () => {
      render(<Card {...propsIsNotHome} />);
      expect(screen.getByText('Wizeline one')).toBeTruthy();
    });

    it('attempts to select unexisting description of card', () => {
      render(<Card {...propsIsNotHome} />);
      expect(screen.queryByText('The greatest video!')).toBeFalsy();
    });
  });
});
