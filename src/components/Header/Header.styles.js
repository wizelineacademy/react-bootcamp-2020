import styled from 'styled-components';
import { Menu } from '@styled-icons/material';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  width: 100%;
  height: 56px;
  padding: 0 16px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  img {
    margin-left: 20px;
    cursor: pointer;
    width: 80px;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 24px;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;

  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--text-primary);
  transition: background-color 0.1s;

  &:active {
    background-color: var(--text-quinary);
  }
`;
