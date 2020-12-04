import React from 'react';
import ReactDOM from 'react-dom';

// import HomePage from './pages/Home';
import './global.css';
import WatchVideoPage from './pages/Watch';

ReactDOM.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <WatchVideoPage />
  </React.StrictMode>,
  document.getElementById('root')
);
