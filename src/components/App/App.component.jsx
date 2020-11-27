import React from 'react';
import { Container } from '@material-ui/core'
import VideoGrid from '../VideoGrid';

export default function App() {
  let videos = [
    { title: 'LEARN OPENCV in 3 HOURS with Python | Including 3x Example Projects (2020)', url: 'https://www.youtube.com/watch?v=WQeoO7MI0Bs', thumbnail: 'https://i.ytimg.com/vi/WQeoO7MI0Bs/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAGDDgbGughpBZroPFgIdL4Lqat2g' },
    { title: '[ 𝑷𝒍𝒂𝒚𝒍𝒊𝒔𝒕 ] 코딩할때 듣기 좋은 노래 • lofi type beat • 3 hours', url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ&t=2699s', thumbnail: 'https://i.ytimg.com/vi/cbuZfY2S2UQ/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCB5wWjUoXrm5YaMdfnAS5hoJr9cQ' },
    { title: 'Touch of Katana ⛩️ Japanese Lofi Hip-Hop', url: 'https://www.youtube.com/watch?v=blnJvW3EhWA', thumbnail: 'https://i.ytimg.com/vi/blnJvW3EhWA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDkXhff3y7sZvWPE4q7dDwmwE2VHQ' }
  ]

  return <Container maxWidth="sm">
    <h1>Hola Mundo</h1>
    <VideoGrid videos={videos} />
  </Container>
}
