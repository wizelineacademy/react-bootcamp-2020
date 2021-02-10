import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import VideoList from '../../components/VideoList';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import './VideoPlayer.styles.css';

class VideoPlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'none'
    }
  }

  setVideos = (data) => {
    this.props.dispatch({ type: 'SET_VIDEOS', payload: data});
  }

  addFavorite = (video) => {
    this.props.videos.items.forEach(element => {
      if (element.id.videoId === video.id.videoId) {
          element.favorite = true;
      }
    });
    this.setVideos(this.props.videos);
    this.props.dispatch({ type: 'ADD_FAVORITE', payload: video});
  }

  removeFavorite = (video) => {
    this.props.dispatch({ type: 'REMOVE_FAVORITE', payload: video});
  }

  render() {
    const { history } = this.props;

    return (
      <div className="videoPlayer">
        <div className="vPlayer">
          <ReactPlayer width='100%' height='100%' url={`https://www.youtube.com/embed${history.location.pathname}`} />
          {!history.location.state.video.favorite  ?<Button color="primary" className='btn' onClick={() => {this.addFavorite(history.location.state.video);}}>ADD TO FAVORITES</Button>
          :<Button color="primary" className='btn' onClick={() => {this.removeFavorite(history.location.state.video);}}>REMOVE FROM FAVORITES</Button>}
        </div>
        <div className="vList">
          <VideoList videoList={this.props.videos.items}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
    favorites: state.favorites
  };
}

export default withRouter(connect(mapStateToProps)(VideoPlayerPage));
