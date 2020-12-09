import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalStyled = styled(Modal)`
  .ant-modal-header {
    background-color: ${({ theme }) => theme.body};
    border-top: 1px solid ${({ theme }) => theme.body};

    .ant-modal-title {
      color: ${({ theme }) => theme.text};
    }
  }
  .ant-modal-content {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    .ant-modal-close-x svg {
      color: ${({ theme }) => theme.text};
    }
  }

  .ant-modal-footer {
    padding: 0 !important;
    background-color: ${({ theme }) => theme.body};
    border-top: 1px solid ${({ theme }) => theme.body};
  }

  .form-login .form-item {
    padding: 5px 2px;
  }

  .form-login .form-footer {
    padding: 13px 2px 0 2px;
  }
`;
