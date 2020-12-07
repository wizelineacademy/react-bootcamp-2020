import React from 'react';
import './Video.scss';

const BASE_URL = 'https://www.youtube.com/embed/';

const Video = props => {
    if(!props.id) {
        return null;
    }

    const embedUrl = `${BASE_URL}${props.id}`; //?autoplay=1

    return (
        <div className="video-container">
            <div className="video">
                <iframe
                    className='video-player'
                    src={embedUrl} 
                    frameBorder="0"
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
        </div>
    );
}

export default Video;