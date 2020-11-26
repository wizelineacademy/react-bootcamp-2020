import React from 'react';

import { Pane } from './MainPane.component.styled';

function MainPane({ children }) {
  return (
    <Pane>
      <div>{children}</div>
    </Pane>
  );
}

export default MainPane;
