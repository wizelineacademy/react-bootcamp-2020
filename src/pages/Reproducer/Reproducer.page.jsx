import React from 'react';

function Reproducer() {
  // has to receive video id of selected item
  // has to fetch video data https://youtube.googleapis.com/youtube/v3/videos?part=player&id=hY7m5jjJ9mM
  return (
    <section>
      <iframe
        width="800"
        height="450"
        allowFullScreen
        frameBorder="0"
        title="rick roll"
        src="https://www.youtube.com/embed/psFf4KXJZoQ"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      />
    </section>
  );
}

export default Reproducer;
