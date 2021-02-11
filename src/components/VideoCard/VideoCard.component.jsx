import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './VideoCard.styles.css';

class VideoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      // <Link to={`/${this.props.videoInfo.id.videoId}`} params={{ video: this.props.videoInfo }}>
      <div onClick={()=>{
         history.push({
          pathname: `/${this.props.videoInfo.id.videoId}`,
          state: { video: this.props.videoInfo }
        });
      }}>
        <Card className='videoCard'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="170"
              image={this.props.videoInfo.snippet.thumbnails.high.url}
            />
            <CardContent height='10px'>
              <h2>
                {this.props.videoInfo.snippet.title}
              </h2>
              <p className='description'>
                {this.props.videoInfo.snippet.description}
              </p>
            </CardContent>
          </CardActionArea>
        </Card> 
      </div>
      // </Link> 
    );
  }
}

export default withRouter(VideoCard)
