import React, { useContext } from "react";
import VideoCard from "./VideoCard";
import VideoContext from "../../providers/VideoContext";
import "../styles/styleGrids.css";

const ListVideoContainer = (props) => {
  const { videoMetaInfo } = useContext(VideoContext);
  const { changingg } = useContext(VideoContext);
  const { favoritesFlag } = useContext(VideoContext);
  const currentVideos = videoMetaInfo;
  const { favoritesVideosArrayUser } = useContext(VideoContext);

  return favoritesFlag ? (
    <div className={changingg ? "gri-container2two" : "grid-container"}>
      {Array.isArray(favoritesVideosArrayUser) &&
        favoritesVideosArrayUser.map((videoitem) => {
          return (
            <VideoCard
              key={videoitem.videoId}
              name={videoitem.videoName}
              imagen={videoitem.imageVideo}
              published={videoitem.published.substring(0, 10)}
              id={videoitem.videoId}
              button={videoitem.buttonText}
            />
          );
        })}
    </div>
  ) : (
    <div className={changingg ? "gri-container2two" : "grid-container"}>
      {Array.isArray(currentVideos) &&
        currentVideos.map((videoitem) => {
          return (
            <VideoCard
              key={videoitem.id.videoId}
              name={videoitem.snippet.title}
              imagen={videoitem.snippet.thumbnails.medium.url}
              published={videoitem.snippet.publishedAt.substring(0, 10)}
              id={videoitem.id.videoId}
              button={videoitem.buttonText}
            />
          );
        })}
    </div>
  );
};
export default ListVideoContainer;
