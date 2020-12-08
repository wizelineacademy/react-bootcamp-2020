import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  width: 100%;
  height: calc(100vh - 56px);
  padding: 36px 5%;
  overflow-y: auto;
`;

export const Title = styled.h4`
  color: var(--text-secondary);
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Videos = styled.div`
  width: 100%;
`;

export const VideoContainer = styled.div`
  cursor: pointer;
  padding: 0 10px 0 0;
  margin-bottom: 20px;
  width: 25%;
  display: inline-block;

  @media (max-width: 1100px) {
    width: 33.3%;
  }
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  &::before {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 4px;
    border-radius: 4px;
    height: 14px;
    margin: 0 6px 10px 0;
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: bold;
    font-size: 14px;
    /* content: "20:23"; */
    content: '${(props) => props.duration}';
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 10px 0;
  width: 100%;
`;

export const VideoName = styled.h5`
  color: var(--text-primary);
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 16px;
  max-height: 32px;
  line-height: 16px;
`;

export const Avatar = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--senary);

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const ChannelName = styled.span`
  display: block;
  margin-top: 8px;
  color: var(--text-tertiary);
  font-size: 14px;

  &:hover {
    color: var(--text-primary);
  }
`;

export const Details = styled.span`
  display: block;
  margin-top: 2px;
  color: var(--text-tertiary);
  font-size: 14px;
`;
