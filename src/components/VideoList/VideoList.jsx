import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import youtube from '../../services/youtube';
// import { relatedVideos } from '../dummyData/videos';
import { ageFrom } from '../../utils/dates';
import VideoImage from '../VideoImage';
import useStyles from './VideoList.styles';

export default function VideoList() {
  const classes = useStyles();
  const { videoId } = useParams();
  const { data, isLoading, isError } = useQuery(
    ['/videos', { videoId }],
    youtube.getRelatedVideo,
    {
      refetchOnWindowFocus: false,
      cacheTime: 10 * 60 * 100,
      staleTime: 10 * 60 * 100,
    }
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error...</span>;
  }
  return (
    <>
      {data.data.items.map((v) => {
        if (!v.snippet) return null;
        return (
          <div key={v.id.videoId}>
            <Link to={`/video/${v.id.videoId}`} className={classes.link}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={v.snippet.thumbnails.medium.url}
                  title={v.snippet.title}
                  component={VideoImage}
                  video={v}
                  readLaterText="watch later"
                  addedLaterText="added"
                  alt="Contemplative Reptile"
                  height="94"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography className={classes.title} component="div">
                      {v.snippet.title}
                    </Typography>
                    <Typography
                      className={classes.subTitle}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {v.snippet.channelTitle} <br /> {v.snippet.title.length}K Views •{' '}
                      {ageFrom(v.snippet.publishTime)}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        );
      })}
    </>
  );
}
