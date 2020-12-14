import React, { useContext } from 'react';
import { ConfigContext } from '../../utils/ConfigState';
import { LayoutStyle } from './Layout.styled';

const Layout= ({ children }) => {

  const { state: { Theme: { PrimaryColor } } } = useContext(ConfigContext);

  return (
    <LayoutStyle
      data-testid="Layout"
      mode={PrimaryColor}
    >
      {children}
    </LayoutStyle>
  );
}           

export default Layout;
