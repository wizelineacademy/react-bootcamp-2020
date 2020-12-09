import './App.css';
import AppRouter from './routing/AppRouter';
import AuthProvider from './store/providers/AuthProvider';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
