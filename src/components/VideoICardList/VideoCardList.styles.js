import styled from 'styled-components';

export const VideoItem = styled.section`
  display: flex;
  flex-direction: row;
  align-items: top;
  cursor: pointer;
`;

export const Image = styled.img`
  display: block;
  margin-right: 10px;
  width: 50%;
`;

export const Typography = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.text};
`;
