import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SidebarLogo = styled.div`
  height: 100px;
  text-align: center;
  padding: 15px;
`;

const LogoName = styled.span`
  margin: 8px;
  font-weight: bold;
`;

function Logo() {
  return (
    <SidebarLogo>
      <FontAwesomeIcon icon={faPlay} style={{ color: '#18A67B' }} size="1x" />
      <LogoName>
        You<span style={{ color: '#AFAFAF' }}>Tube</span>
      </LogoName>
    </SidebarLogo>
  );
}

export default Logo;
