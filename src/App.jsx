import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import Login from './pages/Login';
import AuthProvider from './providers/Auth';
import VideosProvider from './providers/Videos';
import Private from './components/Private';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <VideosProvider>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Private path="/favorites">
              <Favorites />
            </Private>
            <Route path="/player/:id" component={VideoPlayer} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </VideosProvider>
    </BrowserRouter>
  );
}

export default App;
