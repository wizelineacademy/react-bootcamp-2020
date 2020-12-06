import styled from 'styled-components';

const SmallVideoCard = styled.div`
  width: 18rem;
  max-width: 23rem;
  border-radius: 10px;
  background-color: #ffff;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px 2px rgba(133, 131, 131, 0.753);
  transition: transform 500ms;
  &:hover {
    transform: scale(1.05);
  }
`;

const SmallMultimediaArea = styled.div`
  width: inherit;
  height: fit-content;
  border-radius: 6px;
  max-width: inherit;
`;

const SmallContentArea = styled.div`
  max-width: inherit;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const SmallCardTitle = styled.p`
  font-weight: bold;
  margin-bottom: unset;
  margin-block-start: 0.5rem;
  width: inherit;
  font-size: 0.8rem;
  text-align: left;
  white-space: nowrap;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SmallCardParragraphContent = styled.p`
  width: inherit;
  font-size: 0.8rem;
  text-align: left;
  white-space: nowrap;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  SmallVideoCard,
  SmallMultimediaArea,
  SmallCardTitle,
  SmallContentArea,
  SmallCardParragraphContent,
};
