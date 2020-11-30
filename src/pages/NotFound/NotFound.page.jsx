import React from 'react';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section className="not-found">
      <div>
        <h1> Oops! page not found </h1>
      </div>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;
