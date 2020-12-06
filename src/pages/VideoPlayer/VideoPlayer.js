import React, { useContext } from "react";
import VideoFrame from "../../components/VideoFrame/VideoFrame";
import PageContext from "../../providers/Context/PageContext";
import VideoList from "../../components/VideoList/VideoList";
import Grid from "@material-ui/core/Grid";
const VideoPlayer = () => {
  const { video } = useContext(PageContext);
  const { videoList } = useContext(PageContext);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <VideoFrame id={video.id} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <VideoList videos={videoList} />
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
