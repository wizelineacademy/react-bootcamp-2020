import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import VideoCard from '../../components/VideoCard';

export default class VideoGrid extends Component {
  constructor(props) {
    super(props);
  }

  createCards = () => {
    let  cards = [];
    for (let i = 0; i < this.props.videos.length; i++) {
      cards.push(
        <Grid item xs={3}>
          <Paper><VideoCard videoInfo={this.props.videos[i]}/></Paper>
        </Grid>
      );
    }
    return cards
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={3}>
            {this.createCards()}
          </Grid>
        </Grid>
      </div>
    );
  }
  
}