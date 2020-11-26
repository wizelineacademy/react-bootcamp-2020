import React from 'react';
import { useParams } from 'react-router-dom';
import YouTubeVideoArticle from '../../components/YouTube/YouTubeVideoArticle.component';
import YouTubeRelatedVideos from '../../components/YouTube/YouTubeRelatedVideos.component';

function VideoPage() {
  const { id } = useParams();

  return (
    <section className="videopage">
      <article>
        <YouTubeVideoArticle id={id} />
      </article>
      <aside><YouTubeRelatedVideos id={id} /></aside>
    </section>
  );
}

export default VideoPage;
