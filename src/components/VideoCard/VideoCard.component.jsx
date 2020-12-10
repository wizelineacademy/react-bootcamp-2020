import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY_FAVORITES } from '../../utils/constants';
import favoriteIconDisabled from '../../images/favorite_icon_disabled.png';
import favoriteIconEnabled from '../../images/favorite_icon_enabled.png';

import './VideoCard.styles.css';

let favoriteVideos = storage.get(AUTH_STORAGE_KEY_FAVORITES);

function toggleFavorite(e) {
  const videoId = e.target.getAttribute('data-videoid');
  favoriteVideos = storage.get(AUTH_STORAGE_KEY_FAVORITES);

  if (favoriteVideos === null) favoriteVideos = [];
  const index = favoriteVideos.indexOf(videoId);
  if (index > -1) {
    favoriteVideos.splice(index, 1);
    e.target.src = favoriteIconDisabled;
  } else {
    favoriteVideos.push(videoId);
    e.target.src = favoriteIconEnabled;
  }
  storage.set(AUTH_STORAGE_KEY_FAVORITES, favoriteVideos);

  console.log(favoriteVideos);
}

function isFavorite(videoId) {
  let returnValue = false;
  if (favoriteVideos !== null) {
    const index = favoriteVideos.indexOf(videoId);
    if (index > -1) {
      returnValue = true;
    }
  }
  console.log(favoriteVideos);
  return returnValue;
}

function showMsgAuthenticatedFirst() {
  alert('You must Login in order to mark the video as favorite.');
}

export default function Video({ videoid, video }) {
  const { authenticated } = useAuth();

  return (
    <div className="videoCard">
      <div className="videoThumbnail">
        <Link to={`/watch/${videoid}`}>
          <img src={video.thumbnails.medium.url} alt={video.title} />
        </Link>
      </div>
      <div className="favoriteIcon">
        <button
          type="button"
          className="toggleFavorite"
          onClick={authenticated ? toggleFavorite : showMsgAuthenticatedFirst}
        >
          <img
            src={isFavorite(videoid) ? favoriteIconEnabled : favoriteIconDisabled}
            height="28px"
            width="28px"
            alt="Favorite icon"
            data-videoid={videoid}
          />
        </button>
      </div>
      <div className="videoInfo">
        <div className="videoTitle">{video.title}</div>
        <div className="videoDescription">{video.description}</div>
        <div className="videoChannel">{video.channelTitle}</div>
      </div>
    </div>
  );
}
