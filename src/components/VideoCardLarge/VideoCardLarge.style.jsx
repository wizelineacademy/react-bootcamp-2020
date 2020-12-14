import styled from 'styled-components';

const LargeVideoCard = styled.div`
  max-width: 23rem;
  border-radius: 10px;
  background-color: #ffff;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px 2px rgba(133, 131, 131, 0.753);
  transition: transform 250ms;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const LargeMultimediaArea = styled.div`
  border-radius: 6px;
  width: 480px;
  height: 290px;
  max-width: inherit;
`;

const LargeContentArea = styled.div`
  max-width: inherit;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const LargeCardParragraphContent = styled.p`
  width: inherit;
  font-size: 0.8rem;
  text-align: left;
  white-space: nowrap;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  LargeVideoCard,
  LargeMultimediaArea,
  LargeContentArea,
  LargeCardParragraphContent,
};
