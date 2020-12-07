import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import LoaderComponent from './components/Loader/Loader';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoaderComponent />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
