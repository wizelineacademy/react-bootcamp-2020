import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { searchVideoById } from '../../api';
import AppBar from '../../components/AppBar';
import VideoDisplay from '../../components/VideoDisplay';
import '../../global.css';

export default function WatchVideoPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  const getVideo = async () => {
    const result = await searchVideoById(id);
    setVideo(result);
  };

  useEffect(() => {
    getVideo(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AppBar />
      <Grid container className="content">
        <Grid item xs={12} sm={8} md={10}>
          <VideoDisplay video={video} />
        </Grid>
        <Grid item sm>
          &nbsp;
        </Grid>
      </Grid>
    </>
  );
}
