import styled from 'styled-components';

const LargeVideoCard = styled.div`
  max-width: 23rem;
  border-radius: 10px;
  background-color: #ffff;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px 2px rgba(133, 131, 131, 0.753);
  transition: transform 500ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const MultimediaArea = styled.div`
  border-radius: 6px;
  width: 480px;
  height: 290px;
  max-width: inherit;
`;

const ContentArea = styled.div`
  max-width: inherit;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export { LargeVideoCard, MultimediaArea, ContentArea };
