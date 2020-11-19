import React from 'react';
import ReactDOM from 'react-dom';

/*import App from './components/App';*/
import SearchBar from './components/SearchBar';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    <SearchBar />
  </React.StrictMode>,
  document.getElementById('root')
);
