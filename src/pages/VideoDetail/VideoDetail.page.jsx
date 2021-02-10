import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import VideosGrid from '../../components/VideosGrid';
import VideoData from '../../components/VideoData';
import { getVideos } from '../../services/getVideos';

class VideoDetail extends Component {
    state = {
        videos: [],
        loading: true,
    };

    fillVideos = async (searchVideosText) => {
        this.setState({ loading: true });
        const videos = await getVideos(searchVideosText);
        this.setState({ videos, loading: false });
    };

    componentDidMount() {
        this.fillVideos(this.props.video.searchVideosText);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.video.searchVideosText !== this.props.video.searchVideosText) {
            this.fillVideos(this.props.video.searchVideosText);
        }
    }

    render() {
        const { videos, loading } = this.state;
        return (
            <div className="video-detail-page-container bg-white dark:bg-gray-800">
                <div className="video-detail-data grid grid-cols-10">
                    <div className="video-detail col-span-10 md:col-span-6 lg:col-span-7">
                        <VideoData />
                    </div>
                    <div className="videos-list col-span-10 md:col-span-4 lg:col-span-3">
                        {!loading && <VideosGrid listType="compress" videos={videos} />}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        video: state.video,
    };
}

const VideoDetailWithReduxStates = connect(mapStateToProps, null)(VideoDetail);

export default withRouter(VideoDetailWithReduxStates);
