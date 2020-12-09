import styled from 'styled-components';

export const SidebarStyled = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border: 1px solid ${({ theme }) => theme.borderSidebar};
  margin-left: -410px;
  position: absolute;
  width: 297px;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 200;
  transition: margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s;
  box-shadow: -3px 2px 16px 2px #dfdfdf;

  > .sidebar-items {
    > a {
      color: ${({ theme }) => theme.text};

      &:hover {
        color: ${({ theme }) => theme.text};
      }
    }
  }
`;
