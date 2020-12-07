import React from 'react';
import { VideoThumbnail } from './VideoThumbnail';

import '../styles/homeVideoContainer.css';

export const FavoriteVideosScreen = () => {
  const hardFavorites = [
    {
      key: 'nmXMgqjQzls',
      videoId: 'nmXMgqjQzls',
      channelName: 'Wizeline',
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      description:
        'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
      img: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    },
    {
      key: 'Po3VwR_NNGk',
      videoId: 'Po3VwR_NNGk',
      channelName: 'El Economista TV',
      title: 'Wizeline hace sentir a empleados como en casa',
      description:
        'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
      img: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
    },
  ];
  return (
    <div>
      <h1>Favorite Videos</h1>
      <hr />
      <div className='video_container'>
        {hardFavorites.map((h) => (
          <VideoThumbnail
            key={h.key}
            videoId={h.videoId}
            channelName={h.channelName}
            title={h.title}
            description={h.description}
            img={h.img}
          />
        ))}
      </div>
    </div>
  );
};
