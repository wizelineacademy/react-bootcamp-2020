import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';
import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section className="not-found">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/" className="home-link">
            Home
          </Link>
        }
      />
    </section>
  );
}

export default NotFoundPage;
