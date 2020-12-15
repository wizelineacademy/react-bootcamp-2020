import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--info);
  border-right: 2px solid var(--info);
  border-bottom: 2px solid var(--info);
  border-left: 4px solid var(--teal);
  background: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export default Spinner;
