import React from'react';
import VideoPreview from '../VideoPreview/VideoPreview.component';

 function SearchResultVideos(props){

    const renderVideos=props.videos.map((video)=>{
    return <VideoPreview key={video.id.videoId} video={video} handleSelectedVideo={props.handleSelectedVideo}/>
});
    return renderVideos;
}
export default SearchResultVideos;