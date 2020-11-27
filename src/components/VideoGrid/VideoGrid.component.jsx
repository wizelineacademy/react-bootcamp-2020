import React from 'react'
import VideoCard from '../VideoCard';

export default function VideoGrid({videos}) {
  return <div>
    {videos.map(video => {
      return (
      <VideoCard
        title={video.title}
        url={video.url}
        thumbnail={video.thumbnail}
      />)
    })}
  </div>
}