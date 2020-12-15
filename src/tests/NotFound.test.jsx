import React from 'react';
import ReactDom from 'react-dom';
import NotFoundPage from '../pages/NotFound';

window.scrollTo = jest.fn();

it('Renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<NotFoundPage />, div);
});
