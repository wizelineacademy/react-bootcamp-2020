import React from 'react';
 
function VideoPreview(props){
    return(
        <div onClick={()=> props.handleSelectedVideo(props.video)} className="video-preview-container">
            <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.description}/>
            <div className="video-content">
    <div className="video-fotter">{props.video.snippet.title}</div>
            </div>
        </div>
    );
} 
export default VideoPreview;