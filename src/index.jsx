import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/Home';
import './global.css';
import WatchVideoPage from './pages/Watch';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/watch/:id">
          <WatchVideoPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
