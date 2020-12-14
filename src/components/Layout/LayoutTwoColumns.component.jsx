import React from 'react';

import './LayoutTwoColumns.styles.css';

function LayoutTwoColumns({ children }) {
  return <div className="wrapper-twocolumns">{children}</div>;
}

export default LayoutTwoColumns;
