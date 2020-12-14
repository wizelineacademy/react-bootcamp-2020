import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 10%;
`;

export const Typography = styled.p`
  color: ${(props) => props.theme.text};
`;

export const H1 = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;
