import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';

function SecretPage() {
  return (
    <section>
      <pre>
        <Link to="/love">Favorite Videos</Link> <br />
        <Link to="/"> ← go back</Link>
      </pre>
      <strong>Bad Bunny is in da house!</strong> <br />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=XJcXjUB0yqY"
        loop="true"
        playing="true"
      />
    </section>
  );
}

export default SecretPage;
