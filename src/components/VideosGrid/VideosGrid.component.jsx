import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import VideoItem from '../VideoItem';
import './VideosGrid.styles.css';

class VideosGrid extends Component {
    static propTypes = {
        videos: PropTypes.array.isRequired,
    };

    state = {
        videos: this.props.videos,
    };

    getClassesContainer() {
        if (this.props.listType === 'full') {
            return 'videos-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-10 py-6';
        } else {
            return 'videos-container grid grid-cols-1 px-3 py-2 divide-y divide-gray';
        }
    }

    render() {
        const { videos, history } = this.props;
        return (
            <div className={this.getClassesContainer()}>
                {videos.map((item, index) => {
                    return (
                        <VideoItem
                            video={item}
                            key={index}
                            listType={this.props.listType}
                            history={history}
                        />
                    );
                })}
            </div>
        );
    }
}

export default withRouter(VideosGrid);
