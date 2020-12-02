import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { State } from './utils/State'
import 'antd/dist/antd.css';

ReactDOM.render(
  <State>
    <App />
  </State>,
  document.getElementById('root')
);
