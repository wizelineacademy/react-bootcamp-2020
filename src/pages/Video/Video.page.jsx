import React from 'react';
import { useParams } from 'react-router-dom';

function VideoPage() {
  const { id } = useParams();

  return (
    <section className="videopage">
      <article>@todo selected video ${id}</article>
      <sidebar>@todo related videos</sidebar>
    </section>
  );
}

export default VideoPage;
