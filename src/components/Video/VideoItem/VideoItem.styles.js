import styled from 'styled-components';

export const Item = styled.li`
  cursor: pointer;
  margin: 2em 0 0;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 0 5%;

  @media screen and (max-width: 1580px) {
    margin: 20px 0 20px 20px;
    flex-direction: column;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const Thumbnail = styled.img`
  border: none;
  background-size: cover;
  margin: 5px 0;
`;

export const ItemTitle = styled.span`
  color: var(--text-secondary);
  display: inline-block;
`;

export const ItemChannel = styled.p`
  color: var(--text-secondary);
`;
