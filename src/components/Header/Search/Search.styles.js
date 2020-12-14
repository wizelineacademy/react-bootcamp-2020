import styled from 'styled-components';
import { Search, ArrowBack } from '@styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  justify-content: center;
  background-color: var(--primary);
  height: 56px;

  input {
    background-color: var(--tertiary);
    color: var(--text-tertiary);
    font-weight: 500;
    width: 575px;

    height: 30px;
    padding: 0 10px;
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    input {
      width: 400px;
    }
  }

  @media (max-width: 900px) {
    input {
      width: 200px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    position: absolute;
    justify-content: left;
    padding-left: 10px;
    display: ${(props) => (props.searchbar === true ? 'flex' : 'none')};

    input {
      width: 100%;
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 30px;
`;

export const BackIcon = styled(ArrowBack)``;

export const IconContainer = styled.div`
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  margin-right: 10px;
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

export const SearchIconContainer = styled.div`
  cursor: pointer;
  text-align: center;
  background-color: var(--quaternary);
  width: 64px;
  color: var(--text-senary);

  &:hover {
    color: var(--text-quinary);
  }
`;

export const SearchBarContainer = styled.div`
  width: auto;
  display: flex;
  border: 1px solid var(--quaternary);
  border-radius: 2px;
`;
