import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useQuery } from 'react-query';
import youtube from '../../services/youtube';

import VideoCard from '../VideoCard';

const useStyles = makeStyles({
  container: {
    padding: '12px 16px',
  },
  root: {
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '100%',
  },
  item: {
    display: 'flex',
    width: 360,
  },
  headerRoot: {
    flexDirection: 'row',
    alignItems: 'start',
    padding: '12px 12px 12px 0',
  },
  headerContent: {
    textAlign: 'left',
  },
  headerTitle: {
    letterSpacing: 'normal',
    lineHeight: '1.375rem',
    height: 44,
    fontWeight: 500,
    display: 'inline-block',
    fontSize: '1rem',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#606060',
    fontWeight: 400,
  },
  link: {
    display: 'block',
  },
  focusLink: {
    backgroundColor: 'rgba(0,0,0,0.1                )',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const { data, isSuccess } = useQuery(
    ['/videos/current', { term: 'the mandalorian' }],
    youtube.searchVideos,
    {
      refetchOnWindowFocus: false,
      cacheTime: 10 * 60 * 100,
      staleTime: 10 * 60 * 100,
    }
  );
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="stretch"
      classes={{ root: classes.container }}
    >
      {isSuccess &&
        data.data.items.map((v) => {
          const videoId = v.id.videoId || v.id.channelId;
          return (
            <VideoCard
              key={videoId}
              videoId={videoId}
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
