import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import VideosGrid from '../../components/VideosGrid/VideosGrid.component';

class FavoriteVideos extends Component {
    state = {
        videos: this.props.video.favoriteVideos,
        loading: false,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.video.searchVideosText !== this.props.video.searchVideosText) {
            this.props.history.push('/');
        }
    }

    render() {
        const { videos, loading } = this.state;
        return this.props.auth.id ? (
            <div className="favorite-videos-page-container min-h-screen bg-white dark:bg-gray-800 pt-3">
                <h1 className="text-4xl md:text-6xl text-center	text-black dark:text-white uppercase mt-0 mb-4">
                    Videos favoritos
                </h1>
                {!loading && <VideosGrid listType="full" videos={videos} />}
            </div>
        ) : (
            <Redirect to="/" />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        video: state.video,
        auth: state.auth,
    };
}

const FavoriteVideosWithReduxStates = connect(mapStateToProps, null)(FavoriteVideos);

export default withRouter(FavoriteVideosWithReduxStates);
