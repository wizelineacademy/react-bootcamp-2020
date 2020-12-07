import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { channels } from '../../dummyData/videos';
import { ageFrom } from '../../utils/dates';
import VideoImage from '../VideoImage';
import useStyles from './VideoCard.styles';

export default function VideoCard(props) {
  const classes = useStyles();
  const [showButtons, setShowButtons] = useState(false);
  const { videoId, thumbnail, title, channel, publishedDate } = props;
  return (
    <Grid key={videoId} item classes={{ item: classes.item }}>
      <Card
        className={classes.root}
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <ButtonBase
          to={`/video/${videoId}`}
          component={Link}
          classes={{ root: classes.link, focusVisible: classes.focusLink }}
        >
          <CardMedia
            showButtons={showButtons}
            component={VideoImage}
            videoId={videoId}
            readLaterText="watch later"
            addedLaterText="added"
            alt="Contemplative Reptile"
            height="180"
            image={thumbnail}
            title="Contemplative Reptile"
          />
          <CardHeader
            classes={{
              root: classes.headerRoot,
              content: classes.headerContent,
              title: classes.headerTitle,
              subheader: classes.headerSubtitle,
            }}
            avatar={
              <Avatar
                aria-label={channel}
                className={classes.avatar}
                src={channels.items[0].snippet.thumbnails.default.url}
              />
            }
            title={title}
            subheader={
              <>
                {channel} <br /> Published since {ageFrom(publishedDate)}
              </>
            }
          />
        </ButtonBase>
      </Card>
    </Grid>
  );
}
