import React, { PureComponent } from 'react';

import Card from '../Card';
import Grid from './Grid.styled';
import Column from './Column.styled';
import { getVideoId } from '../../utils/getVideoId';

class VideoGrid extends PureComponent {
  render() {
    return (
      <Grid>
        {this.props.videos.map((video) => {
          const videoId = getVideoId(video);
          return (
            <Column key={videoId}>
              <Card
                data-testid="videoCard"
                videoId={videoId}
                cardImg={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
              />
            </Column>
          );
        })}
      </Grid>
    );
  }
}

export default VideoGrid;
