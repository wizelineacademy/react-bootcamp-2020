import React, { useRef, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useStyles as homeStyles } from '../Home/Home.page';
import VideoList from '../../components/VideoList/VideoList';
import youtube from '../../services/youtube';
import VideoDetailCard from '../../components/VideoDetailCard/VideoDetailCard.component';
import { ageFrom } from '../../utils/dates';

const useStyles = makeStyles(() => ({
  tags: { marginRight: 8, height: 26 },
  title: {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: '24px',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#606060',
  },
  videoData: {
    marginTop: 8,
  },
}));

function VideoDetail() {
  //  nmXMgqjQzls
  const parentRef = useRef(null);
  const childrenRef = useRef(null);
  const homeClasses = homeStyles();
  const classes = useStyles();
  const { videoId } = useParams();
  const { data, isSuccess } = useQuery(
    ['/videos/current', { videoId }],
    youtube.getVideo,
    {
      refetchOnWindowFocus: false,
      cacheTime: 10 * 60 * 100,
      staleTime: 10 * 60 * 100,
    }
  );
  const [parentWidth, setParentWidht] = useState(0);
  useEffect(() => {
    /* if (parentRef.current) {
      const parentHeight = parentRef.current.offsetHeight;
      const parentWidth = parentRef.current.offsetWidth;
    } */

    if (childrenRef.current) {
      // const childrenHeight = childrenRef.current.offsetHeight;
      const childrenWidth = childrenRef.current.offsetWidth;
      setParentWidht(childrenWidth);
    }
  }, [parentRef, childrenRef]);

  const renderVideo = () => {
    const nada = false;
    if (isSuccess && data.data.items) {
      const v = data.data.items[0];
      return (
        <div className={classes.videoData}>
          {nada &&
            v.snippet.tags.map((t) => {
              return (
                <Chip
                  key={t}
                  className={classes.tags}
                  label={t}
                  avatar={<LocalOfferIcon />}
                />
              );
            })}
          <Typography className={classes.title} component="h2">
            {v.snippet.title}
          </Typography>
          <Typography className={classes.subtitle} component="p">
            {v.snippet.title.length}K Views • {ageFrom(v.snippet.publishedAt)}
          </Typography>
          <VideoDetailCard video={v} />
        </div>
      );
    }

    return null;
  };

  return (
    <Container
      classes={{ root: homeClasses.root, maxWidthXl: homeClasses.maxWidthXl }}
      style={{ paddingTop: 16 }}
      maxWidth="xl"
      ref={parentRef}
    >
      <Grid container spacing={2} justify="center" alignItems="stretch">
        <Grid item style={{ width: 'calc(100% - 400px)' }}>
          <iframe
            ref={childrenRef}
            frameBorder={0}
            title="video"
            scrolling="no"
            width="100%"
            height={(parentWidth * 56.214) / 100}
            src={`https://www.youtube.com/embed/${videoId}`}
          />
          {renderVideo()}
        </Grid>
        <Grid item style={{ width: 400 }}>
          <VideoList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default VideoDetail;
