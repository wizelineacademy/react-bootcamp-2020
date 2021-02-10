import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideosGrid from '../../components/VideosGrid/VideosGrid.component';
import { getVideos } from '../../services/getVideos';

class Home extends Component {
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
            <div className="home-page-container min-h-screen bg-white dark:bg-gray-800 pt-3">
                <h1 className="text-4xl md:text-6xl text-center	text-black dark:text-white uppercase mt-0 mb-4">
                    Welcome to the Challenge!
                </h1>
                {!loading && <VideosGrid listType="full" videos={videos} />}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        video: state.video,
    };
}

const HomeWithReduxStates = connect(mapStateToProps, null)(Home);

export default HomeWithReduxStates;
