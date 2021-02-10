import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Heart, HeartFill } from '@styled-icons/bootstrap';
import { connect } from 'react-redux';

import { getVideoById, getRelatedVideos } from '../../api/videos.api';
import PageLayout from './PageLayout.styled';
import VideoColumn from './VideoColumn.styled';
import SidebarColumn from './SidebarColumn.styled';
import VideoWrapper from './VideoWrapper.styled';
import VideoInfo from './VideoInfo.styled';
import VideoHeading from './VideoHeading.styled';
import HeartButton from './HeartButton.styled';
import RelatedVideo from './RelatedVideo.styled';
import RelatedVideoImg from './RelatedVideoImg.styled';
import RelatedVideoData from './RelatedVideoData.styled';
import { getVideoId } from '../../utils/getVideoId';
import { addToFavorites } from '../../redux/actions/videos';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      relatedVideos: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const fetchVideo = async () => {
      try {
        const result = await getVideoById(id);
        this.setState({ video: result?.data?.items[0] });
      } catch (error) {
        console.log(error);
        return null;
      }
    };
    const fetchRelatedVideos = async () => {
      try {
        const result = await getRelatedVideos(id);
        this.setState({ relatedVideos: result.data.items });
      } catch (error) {
        return null;
      }
    };
    const selectedVideo = this.props.videos.find((currentVideo) => {
      const currentVideoId = getVideoId(currentVideo);
      return currentVideoId === id;
    });
    if (selectedVideo) {
      this.setState({ video: selectedVideo });
    } else {
      fetchVideo();
    }
    fetchRelatedVideos();
  }

  removeFromFavorites = () => {};

  render() {
    const { video, relatedVideos } = this.state;
    const { authenticated, favoriteVideos } = this.props;
    const { id } = this.props.match.params;
    console.log(favoriteVideos);

    return (
      <PageLayout>
        <VideoColumn>
          <VideoWrapper>
            <iframe
              data-testid="iframe"
              src={`https://www.youtube.com/embed/${id}`}
              title={video?.snippet?.title || id}
              allowFullScreen
            />
          </VideoWrapper>
          <VideoInfo>
            <VideoHeading data-testid="videoHeading">
              <h1>{video?.snippet?.title}</h1>
              {authenticated &&
                (favoriteVideos.find((currentVideo) => {
                  const currentVideoId = getVideoId(currentVideo);
                  return currentVideoId === id;
                }) ? (
                  <HeartButton
                    type="button"
                    onClick={() => this.removeFromFavorites(id)}
                    data-testid="removeFromFavorites"
                  >
                    <HeartFill size="20" />
                  </HeartButton>
                ) : (
                  <HeartButton
                    type="button"
                    onClick={() => this.props.addToFavorites(video)}
                    data-testid="addToFavorites"
                  >
                    <Heart size="20" />
                  </HeartButton>
                ))}
            </VideoHeading>
            <p data-testid="videoDescription">{video?.snippet?.description}</p>
          </VideoInfo>
        </VideoColumn>
        <SidebarColumn>
          {!!relatedVideos &&
            relatedVideos.map((relatedVideo) => {
              const relatedVideoId = getVideoId(relatedVideo);

              return (
                relatedVideo.snippet && (
                  <RelatedVideo key={relatedVideoId} to={`/video/${relatedVideoId}`}>
                    <RelatedVideoImg>
                      <img
                        src={relatedVideo.snippet.thumbnails.medium.url}
                        alt={relatedVideo.snippet.title}
                      />
                    </RelatedVideoImg>
                    <RelatedVideoData>
                      <h2>{relatedVideo.snippet.title}</h2>
                    </RelatedVideoData>
                  </RelatedVideo>
                )
              );
            })}
        </SidebarColumn>
      </PageLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  videos: state.videos.videos,
  favoriteVideos: state.videos.favoriteVideos,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (video) => dispatch(addToFavorites(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VideoPage));
