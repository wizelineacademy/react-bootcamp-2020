import styled from 'styled-components';

const PrimaryButton = styled.button`
  background: #2a9d8f;
  border: 1px solid #2a9d8f;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 2rem;
  &:hover {
    background: #368f84;
  }
`;

const SecondaryButton = styled.button`
  border: 0.5px solid #e8dace;
  font-size: 0.9rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 2rem;
  background: #ffa62b;
  font-weight: 600;
  &:active {
    color: #cfc0b4;
  }
`;

export { PrimaryButton, SecondaryButton };
