import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addVideoFavorite } from '../../redux/actions/video';

class VideoData extends Component {
    checkVideoIsFavorite = () => {
        if (!this.props.video.favoriteVideos) return false;

        const findVideoById = this.props.video.favoriteVideos.find(
            (video) => video.id === this.props.video.videoSelected.id
        );

        return findVideoById ? true : false;
    };

    toggleVideoToFavoriteList = () => {
        this.props.addVideoFavorite(this.props.video.videoSelected);
    };

    componentDidMount() {
        if (this.props.match.params.id !== this.props.video.videoSelected.id)
            this.props.history.push('/');
    }

    render() {
        const { video, auth } = this.props;
        const isFavoriteVideo = this.checkVideoIsFavorite();
        return (
            <div className="video-data-container px-6 py-6">
                <div className="iframe-container mb-6">
                    <iframe
                        title="video"
                        width="100%"
                        height="500px"
                        src={'https://www.youtube.com/embed/' + video.videoSelected?.id}
                    ></iframe>
                </div>
                <div className="information">
                    <div className="title mb-3 relative pr-6">
                        <span
                            className="leading-5 text-3xl text-black dark:text-white"
                            dangerouslySetInnerHTML={{
                                __html: video.videoSelected?.snippet?.title,
                            }}
                        ></span>
                        {auth.id ? (
                            <div
                                className="heart-container absolute right-0 top-0 w-6 h-6 cursor-pointer"
                                onClick={this.toggleVideoToFavoriteList}
                            >
                                <svg
                                    className={
                                        'w-full ' +
                                        (isFavoriteVideo
                                            ? 'fill-current text-red-600'
                                            : '')
                                    }
                                    fill={!isFavoriteVideo ? 'none' : ''}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                        ) : null}
                    </div>
                    <div className="description">
                        <p className="leading-5 text-sm text-gray-400">
                            {video.videoSelected?.snippet?.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        video: state.video,
        auth: state.auth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addVideoFavorite: (videoSelected) => dispatch(addVideoFavorite(videoSelected)),
    };
}

const VideoDataWithReduxStates = connect(mapStateToProps, mapDispatchToProps)(VideoData);

export default withRouter(VideoDataWithReduxStates);
