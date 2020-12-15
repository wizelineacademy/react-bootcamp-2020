import React from 'react';
import ReactDom from 'react-dom';
import App from '../components/App';

window.scrollTo = jest.fn();

it('Renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
});
