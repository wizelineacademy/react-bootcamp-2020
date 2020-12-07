import React from 'react';

function Player (props) {
    if (!props.video) {
        return <div>Waiting you to select a video ...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    return (
        <div>
            <div>
                <iframe src={videoSrc} allowFullScreen title='My Player'/>
            </div>
            <div>
                <h4 >{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>

    )
}

export default Player;