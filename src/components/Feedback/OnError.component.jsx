import React from 'react';

import Alert from 'react-bootstrap/Alert';

export default function OnError(props) {
  return (
    <div className="mt-3">
      <Alert variant="warning">Error: {props.error.message}</Alert>
    </div>
  );
}
