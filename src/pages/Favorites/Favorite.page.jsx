import React from 'react';
import { Alert } from 'antd';

function FavoritePage() {
  return (
    <section className="full-width">
      <Alert
        message="Warning"
        description="You haven't added any video to your favorites yet."
        type="warning"
        showIcon
        closable
      />
    </section>
  );
}

export default FavoritePage;
