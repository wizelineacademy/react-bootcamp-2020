import styled from 'styled-components';
import { Search } from '@styled-icons/material/Search';
import { ToggleOn, ToggleOff } from '@styled-icons/bootstrap';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  overflow-x: hidden;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--text-primary);
  transition: background-color 0.1s;

  &:active {
    background-color: var(--text-quinary);
  }

  svg {
    width: 24px;
  }
`;

export const IconSearchContainer = styled.div`
  cursor: pointer;
  align-items: center;
  display: none;
  justify-content: center;
  flex-shrink: 0;

  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: var(--text-primary);
  transition: background-color 0.1s;

  &:active {
    background-color: var(--text-quinary);
  }

  svg {
    width: 24px;
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const IconToggleOn = styled(ToggleOn)``;

export const IconToggleOff = styled(ToggleOff)``;

export const IconSearch = styled(Search)``;

export const Avatar = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: var(--senary);

  img {
    width: 100%;
    border-radius: 50%;
  }
`;
