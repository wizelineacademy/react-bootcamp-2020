import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ThemeProviderContext from './providers/Theme/Theme.provider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  </React.StrictMode>,
  document.getElementById('root')
);
