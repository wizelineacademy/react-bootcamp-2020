import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './VideoListItemStyles';

function VideoListItem(props) {
  const classes = useStyles();
  return (
    <Link to={`/player/${props.dataId}/${props.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={props.snippet.thumbnails.default.url}
        />
        <div className={classes.details}>
          <CardContent>
            <Typography variant="body1" component="p">
              {props.snippet.title}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
export default VideoListItem;
