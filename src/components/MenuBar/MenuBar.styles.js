import styled from 'styled-components';
import { Input, Radio } from 'semantic-ui-react';

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const MenuItem = styled.a`
  color: ${(props) => props.theme.text};
`;

export const FavoritesItem = styled.a`
  margin-left: 2rem;
  color: ${(props) => props.theme.text};
`;

export const InputItem = styled(Input)`
  width: 39%;
  margin-right: 2rem;
`;
export const RadioItem = styled(Radio)`
  margin-right: 2rem;
`;

export const Left = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
`;
