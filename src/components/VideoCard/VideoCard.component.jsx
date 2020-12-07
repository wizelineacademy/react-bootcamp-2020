import React from 'react';
import { Link } from 'react-router-dom';
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
  const pathId = props.isFav ? 'favorites' : 'watch';
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/player/${pathId}/${props.id}`} style={{ textDecoration: 'none' }}>
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
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
