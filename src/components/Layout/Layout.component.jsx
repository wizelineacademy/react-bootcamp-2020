import React from 'react';
import './Layout.styles.scss';
import HeaderNav from '../../components/common/navbar';

function AppLayout(props) {
  return (
      <div className='app-layout'>
        <HeaderNav/>
        {props.children}
      </div>
  );
}

export default AppLayout;
/*
function Layout({ children }) {
  return <main className="container">{children}</main>;
}

export default Layout;
*/