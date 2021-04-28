import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h9ouf3h5.us.auth0.com"
      clientId="mXPzc38j1P3FNar49PFgLRkAlA7v8z8N"
      redirectUri={window.location.origin}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
