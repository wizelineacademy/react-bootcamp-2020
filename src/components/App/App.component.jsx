import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';

import Layout from '../Layout';

import Routes from '../../routes';
// import HomePage from '../../pages/Home';
// import VideoDetail from '../../pages/VideoDetail';
// import FavoriteVideosPage from '../../pages/FavoriteVideos';

import Navbar from '../Navbar';
import NavigationMenu from '../NavigationMenu/NavigationMenu.component';
import LoginModal from '../LoginModal/LoginModal.component';

import '../../global.css';

function App() {
    return (
        <div>
            <Navbar />
            <NavigationMenu />
            <Layout>
                <Switch>
                    <Routes />
                </Switch>
            </Layout>
            <LoginModal />
        </div>
    );
}

export default App;
