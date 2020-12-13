import styled from 'styled-components';
import { ListPlus, ListMinus } from '@styled-icons/boxicons-regular';

export const VideoContainer = styled.div`
  display: flex;
  width: 85%;
  margin-left: calc(94px + 4.5em + 80px);

  @media screen and (max-width: 1580px) {
    width: 95%;
    margin-left: 0;
    margin: auto;
  }

  @media screen and (max-width: 957px) {
    width: 90%;
    flex-direction: column;
    margin-left: 0;
    margin: auto;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 854px;
  max-height: 483px;

  @media screen and (max-width: 1580px) {
    min-width: 640.5px;
    min-height: 362.25px;
  }

  @media screen and (max-width: 957px) {
    width: 100%;
    max-height: none;
    min-width: 0;
  }
`;

export const VideoTitle = styled.h4`
  color: var(--text-secondary);
  font-weight: 400;
  margin-bottom: 0;
`;

export const VideoChannel = styled.small`
  color: var(--text-secondary);
`;

export const VideoDescription = styled.small`
  color: var(--text-secondary);
`;

export const Divider = styled.br``;

export const Frame = styled.iframe`
  width: 100%;
  height: 480px;
  max-width: 854px;
  max-height: 480px;
  display: block;
  margin: 2em auto;
  border: none;

  @media screen and (max-width: 1580px) {
    max-width: 100%;
    max-height: 362.25px;
  }

  @media screen and (max-width: 957px) {
    max-width: none;
    min-width: 0;
    width: 100%;
  }
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

export const IconSave = styled(ListPlus)``;
export const IconDelete = styled(ListMinus)``;
