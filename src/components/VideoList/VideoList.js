import React from "react";
import VideoCard from "../Videocard/VideoCard";
import GridList from "@material-ui/core/GridList";
import "./VideoList.css";

const VideoList = (props) => {
  const videos = props.videos.map((dato) => {
    return (
      <VideoCard
        key={dato.id.videoId}
        titulo={dato.snippet.title}
        imagen={dato.snippet.thumbnails.medium.url}
        fecha={dato.snippet.publishedAt}
        id={dato.id.videoId}
        descripcion={dato.snippet.description}
        objeto={dato}
      />
    );
  });

  return (
    <div>
      <GridList spacing={props.spacing} className="Root" cols={3}>
        {videos}
      </GridList>
    </div>
  );
};

export default VideoList;
