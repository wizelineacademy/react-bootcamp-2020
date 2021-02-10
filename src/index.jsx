import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';
import 'typeface-tinos';
import 'typeface-lato';

import App from './components/App';
import './global.css';
import store from './redux/store';

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Reset />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
