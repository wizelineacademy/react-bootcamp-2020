import styled from 'styled-components';

export const VideoFrame = styled.iframe`
  height: 26%;
  width: 100%;
`;

export const VideoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  font-size: 1.6rem;
  color: ${(props) => props.theme.text};
`;

export const Typography = styled.p`
  color: ${(props) => props.theme.text};
`;
