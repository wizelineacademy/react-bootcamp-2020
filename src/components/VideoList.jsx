import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import youtube from '../services/youtube';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    margin: '4px 8px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 168,
    minWidth: 168,
  },
  title: {
    fontSize: 14,
    lineHeight: '16px',
  },
  subTitle: {
    fontSize: 14,
    lineHeight: '16px',
    marginTop: 4,
  },
}));

export default function VideoList() {
  const classes = useStyles();
  const { videoId } = useParams();
  const { data, isLoading } = useQuery(['/videos', { videoId }], youtube.getRelatedVideo);
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <>
      {data.data.items.map((v) => {
        return (
          <Card key={v.id.videoId} className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={v.snippet.thumbnails.medium.url}
              title="Live from space album cover"
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
                  {v.snippet.channelTitle}
                </Typography>
              </CardContent>
            </div>
          </Card>
        );
      })}
    </>
  );
}
