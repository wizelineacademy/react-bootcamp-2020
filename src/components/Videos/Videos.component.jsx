import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import youtube from '../../services/youtube';
import VideoCard from '../VideoCard';
import useStyles from './Videos.styles';

export default function ImgMediaCard() {
  const classes = useStyles();
  const { term } = useParams();
  const { data, isSuccess } = useQuery(
    ['/videos/current', { term: term || 'the mandalorian' }],
    youtube.searchVideos,
    {
      refetchOnWindowFocus: false,
      cacheTime: 10 * 60 * 100,
      staleTime: 10 * 60 * 100,
    }
  );
  return (
    <Grid
      data-testid="videoGridBase"
      container
      spacing={2}
      justify="center"
      alignItems="stretch"
      classes={{ root: classes.container }}
    >
      {!isSuccess && 'Loading'}
      {isSuccess &&
        data.data.items.map((v) => {
          const videoId = v.id.videoId || v.id.channelId;
          if (!v.snippet) return null;
          return (
            <VideoCard
              key={videoId}
              video={v}
              thumbnail={v.snippet.thumbnails.high.url}
              title={v.snippet.title}
              channel={v.snippet.channelTitle}
              publishedDate={v.snippet.publishedAt}
            />
          );
        })}
    </Grid>
  );
}
