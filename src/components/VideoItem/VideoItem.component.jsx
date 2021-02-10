import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { videoSelected } from '../../redux/actions/video';
import './VideoItem.styles.css';

class VideoItem extends Component {
    static propTypes = {
        video: PropTypes.object.isRequired,
    };
    state = {
        video: this.props.video,
    };

    getClassesByDiv = (divType) => {
        switch (divType) {
            case 'card-container':
                if (this.props.listType === 'full')
                    return 'card-video bg-white dark:bg-gray-600 shadow-lg hover:shadow-xl cursor-pointer rounded-md pb-4';
                else
                    return 'card-video bg-transparent dark:bg-gray-800 hover:bg-gray-300 cursor-pointer flex py-2 px-2';
            case 'figure-thumbnail':
                if (this.props.listType === 'full')
                    return 'thumbnail-container h-140 w-100';
                else return 'thumbnail-container h-90 w-120';
            case 'description':
                if (this.props.listType === 'full') return 'description';
                else return 'description hidden';
            default:
                break;
        }
    };

    goVideoDetailpage = (currentVideo) => {
        this.props.history.push(`/video-detail/${currentVideo.id}`);

        this.props.videoSelected(currentVideo);
    };

    render() {
        const { video } = this.state;
        return video && video.id ? (
            <div
                className={this.getClassesByDiv('card-container')}
                onClick={() => this.goVideoDetailpage(video)}
            >
                <figure className={this.getClassesByDiv('figure-thumbnail')}>
                    <img
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        className="h-full w-full object-cover object-center"
                    />
                </figure>
                <div className="card-information px-4 py-4 flex-grow-0 flex-shrink flex-basis-100">
                    <div className="title mb-3">
                        <span
                            className="leading-5 text-lg text-black dark:text-white"
                            dangerouslySetInnerHTML={{ __html: video.snippet.title }}
                        ></span>
                    </div>
                    <div className={this.getClassesByDiv('description')}>
                        <p className="leading-5 text-sm text-gray-400">
                            {video.snippet.description}
                        </p>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        videoSelected: (videoSelectedItem) => dispatch(videoSelected(videoSelectedItem)),
    };
}

const VideoItemWithReduxStates = connect(null, mapDispatchToProps)(VideoItem);

export default VideoItemWithReduxStates;
