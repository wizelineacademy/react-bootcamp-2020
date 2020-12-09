import styled from 'styled-components';
import { Input } from 'antd';

export const InputStyled = styled(Input)`
  &.ant-input-affix-wrapper {
    background-color: ${({ theme }) => theme.body};

    > .ant-input {
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }

    .anticon-search svg {
      color: ${({ theme }) => theme.text};
    }
  }
`;
