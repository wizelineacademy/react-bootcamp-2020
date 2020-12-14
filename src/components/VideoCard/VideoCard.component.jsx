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
}

function isFavorite(videoId) {
  let returnValue = false;
  if (favoriteVideos !== null) {
    const index = favoriteVideos.indexOf(videoId);
    if (index > -1) {
      returnValue = true;
    }
  }
  return returnValue;
}

function showFavoriteButton(isRelated, authenticated) {
  if (isRelated) return false;
  if (authenticated) return true;
  return false;
}

export default function Video({ videoid, video, isRelated }) {
  const { authenticated } = useAuth();

  if (!video) return '';

  const { title, description, channelTitle } = video;
  const { url } = video.thumbnails.medium;

  return (
    <>
      <div className="videoCard">
        <div className="videoThumbnail">
          <Link to={`/watch/${videoid}`}>
            <img src={url} alt={title} />
          </Link>
        </div>
        {showFavoriteButton(isRelated, authenticated) ? (
          <div className="favoriteIcon">
            <button type="button" className="toggleFavorite" onClick={toggleFavorite}>
              <img
                src={isFavorite(videoid) ? favoriteIconEnabled : favoriteIconDisabled}
                height="28px"
                width="28px"
                alt="Favorite icon"
                data-videoid={videoid}
              />
            </button>
          </div>
        ) : (
          ''
        )}
        <div className={isRelated ? 'videoInfoRelated' : 'videoInfo'}>
          <div className="videoTitle">{title}</div>
          {isRelated ? '' : <div className="videoDescription">{description}</div>}
          <div className="videoChannel">{channelTitle}</div>
        </div>
      </div>
      {isRelated ? <hr className="lineSepRelatedVideos" /> : ''}
    </>
  );
}
