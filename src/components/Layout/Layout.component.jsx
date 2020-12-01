import React, { useContext } from 'react';
import { StateContext } from '../../utils/State';
import { LayoutStyle } from './Layout.styled';

const Layout= ({ children }) => {

  const { Theme } = useContext(StateContext);

  return (
    <LayoutStyle
      mode={Theme}
    >
      {children}
    </LayoutStyle>
  );
}           

export default Layout;
