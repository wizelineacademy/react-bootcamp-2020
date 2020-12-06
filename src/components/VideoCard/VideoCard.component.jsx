import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 140,
  },
});

function VideoCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={props.snippet.thumbnails.high.url}
          title={props.snippet.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.snippet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
