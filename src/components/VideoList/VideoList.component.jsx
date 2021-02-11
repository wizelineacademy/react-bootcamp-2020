import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './VideoList.styles.css';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  createListItems = (history) => {
    let listItems = [];
    for (let i = 0; i < this.props.videoList.length; i++) {
      listItems.push(
        <div onClick={()=>{
          history.push({
           pathname: `/${this.props.videoList[i].id.videoId}`,
           state: { video: this.props.videoList[i] }
         });
        }}>
          {/* <Link to={`/${this.props.videoList[i].id.videoId}`}> */}
            <ListItem alignItems="flex-start" className='listElement'>
                <ListItemAvatar className="miniVideo">
                  <img 
                    src={this.props.videoList[i].snippet.thumbnails.high.url}
                    alt="We Are Wizeline"
                    className="miniImg"/>
                </ListItemAvatar>
                <ListItemText className='text'
                  primary={this.props.videoList[i].snippet.title}
                />
              </ListItem>
            <Divider variant="inset" component="li" />
          {/* </Link> */}
        </div>
      );
    }
    return listItems
  }

  render() {
    const { history } = this.props;
    return (
      <List className='root'>
        {this.createListItems(history)}
      </List>
    );
  }
}

export default withRouter(VideoList)
