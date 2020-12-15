import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';

import useStyles from './VideoCardDetail.styles';

function urlify(text, maxLength = 'full') {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    return `[${
      maxLength === 'full' || !maxLength ? url : `${url.substring(0, maxLength)}...`
    }](#${url})`;
  });
}

export default function VideoDetailCard(props) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(true);
  const { video } = props;
  /* const handleExpandClick = () => {
    setExpanded(!expanded);
  }; */

  const renderDetail = () => {
    const paragraphs = video.snippet.description.split('\n');
    return (
      <Collapse in timeout="auto" unmountOnExit>
        <CardContent style={{ padding: '16px 0' }}>
          {paragraphs.map((p, i) => {
            const markdown = urlify(p, 35);
            // eslint-disable-next-line react/no-array-index-key
            const key = `${p}${i}`;
            return (
              <Typography
                classes={{ root: p.length > 0 ? classes.detail : classes.separator }}
                paragraph
                key={key}
                component="div"
              >
                <ReactMarkdown source={markdown} />
              </Typography>
            );
          })}
        </CardContent>
      </Collapse>
    );
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        classes={{ root: classes.header }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {video.snippet.channelTitle.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={video.snippet.channelTitle}
        subheader={renderDetail()}
      />
    </Card>
  );
}
