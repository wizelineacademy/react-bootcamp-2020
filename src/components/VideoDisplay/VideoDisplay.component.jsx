import React from 'react';

export default function VideoDisplay({video}){

  return (
    <iframe src={video.url} title={video.title}></iframe>
  )
}