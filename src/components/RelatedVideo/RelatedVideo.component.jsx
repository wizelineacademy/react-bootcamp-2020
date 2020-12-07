/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './RelatedVideo.module.css';

function RelatedVideo({ video }) {
  const history = useHistory();

  const goToVideo = () => {
    history.push(`/player/${video.id}`);
  };

  return (
    <div className={styles.video_container}>
      <img
        onClick={goToVideo}
        className={styles.video_thumbnail}
        src={video.thumbnail}
        alt={video.title}
      />
      <p onClick={goToVideo} className={styles.video_title}>
        {video.title}
      </p>
      <p className={styles.video_upload_date}>{video.publishedAt}</p>
    </div>
  );
}

export default RelatedVideo;
