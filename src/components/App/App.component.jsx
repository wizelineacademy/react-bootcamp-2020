import React, { Component } from 'react';
import { connect } from "react-redux"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoPlayerPage from '../../pages/VideoPlayer';
import FavoritesPage from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import NavBar from '../NavBar';
import getVideoList from '../../providers/Video';

class App extends Component {
  constructor(props) {
    super(props);
  }

  setVideos = (data) => {
    this.props.dispatch({ type: 'SET_VIDEOS', payload: data});
  }

  async componentDidMount() {
    let aux = await getVideoList('wizeline');
    this.setVideos(aux.data);
  }
  render () {
    return (
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <AuthProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage videos={this.props.videos.items}/>
                </Route>
                <Route exact path="/favorites">
                  <FavoritesPage />
                </Route>
  
                <Route exact path="/:id">
                  <VideoPlayerPage />
                </Route>
  
                {/* <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private> */}
  
                
                <Route path="*">
                  <NotFound />
                </Route>
  
              </Switch>
            </Layout>
          </AuthProvider>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

export default connect(mapStateToProps)(App);