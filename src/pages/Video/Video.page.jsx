import React from 'react';
import { useParams } from 'react-router-dom';
import YouTubeVideoArticle from '../../components/YouTube/YouTubeVideoArticle.component';
import YouTubeRelatedList from '../../components/YouTube/YouTubeRelatedList.component';

export default function VideoPage() {
  const { id } = useParams();

  return (
    <section className="videopage">
      <article>
        <YouTubeVideoArticle id={id} />
      </article>
      <aside>
        <YouTubeRelatedList id={id} />
      </aside>
    </section>
  );
}
