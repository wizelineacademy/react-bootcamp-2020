import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoGrid from '../../components/VideoGrid';
import Container from '../../components/Container';
import SearchInput from './SearchInput.styled';
import Title from '../../components/Title';
import { fetchVideos } from '../../redux/actions/videos';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    if (this.props.videos.length <= 0) {
      this.props.fetchVideos('majestic casual');
    }
  }

  handleSearchChange = (event) => {
    event.persist();
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchVideos(this.state.query);
  };

  render() {
    return (
      <Container>
        {this.props.authenticated && (
          <Title data-testid="homepageTitle">
            Welcome, {`${this.props.user.name || 'User'}!`}
          </Title>
        )}
        <form onSubmit={this.handleSubmit}>
          <SearchInput
            placeholder="Buscar..."
            value={this.state.query}
            onChange={this.handleSearchChange}
          />
        </form>
        {this.props.videos.length > 0 && <VideoGrid videos={this.props.videos} />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  videos: state.videos.videos,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: (query) => dispatch(fetchVideos(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
