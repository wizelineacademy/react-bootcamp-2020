import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';

const dotenv = require('dotenv');

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
