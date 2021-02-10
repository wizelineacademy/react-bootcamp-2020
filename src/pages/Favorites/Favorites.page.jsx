import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import VideoGrid from '../../components/VideoGrid';
import Title from '../../components/Title';

class FavoritesPage extends Component {
  render() {
    const { favoriteVideos } = this.props;
    return (
      <Container>
        {favoriteVideos.length ? (
          <VideoGrid videos={favoriteVideos} />
        ) : (
          <Title>Add some videos to your favorite list</Title>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteVideos: state.videos.favoriteVideos,
});

export default connect(mapStateToProps)(FavoritesPage);
