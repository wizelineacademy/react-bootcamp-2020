import React from 'react';
import ReactDom from 'react-dom';
import Spinner from '../components/Spinner/Spinner';

window.scrollTo = jest.fn();

it('Renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Spinner />, div);
});
