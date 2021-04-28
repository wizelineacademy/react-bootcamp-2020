import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import dotenv from 'dotenv';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import './global.css';

dotenv.config();
const { REACT_APP_DOMAIN_OAUTH, REACT_APP_OAUTH_CLIENT_ID } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_DOMAIN_OAUTH}
      clientId={REACT_APP_OAUTH_CLIENT_ID}
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
