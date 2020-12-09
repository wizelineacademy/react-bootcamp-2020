import styled from 'styled-components';
import { Switch } from 'antd';

export const SwitchStyled = styled(Switch)`
  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.body};
  }
`;
