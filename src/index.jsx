import React from 'react';
import ReactDOM from 'react-dom';
import LeftDrawer from './components/LeftDrawer';
import SearchBar from './components/SearchBar';
import RightSideMenu from './components/RightSideMenu';
// import LeftDrawer from './components/LeftDrawer';
/* import App from './components/App'; */
// import SearchBar from './components/SearchBar';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <LeftDrawer />
    <SearchBar />
    <RightSideMenu />
  </React.StrictMode>,
  document.getElementById('root')
);
