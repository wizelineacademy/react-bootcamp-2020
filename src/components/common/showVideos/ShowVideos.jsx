import React from 'react';
import VideoItem from '../videoItem/VideoItem';
import './ShowVideos.scss';
import {Divider} from 'semantic-ui-react'

const ShowVideos = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>;
    });

    return (
        <div className='video-grid'>{renderedVideos}</div>
    );
}

export default ShowVideos;