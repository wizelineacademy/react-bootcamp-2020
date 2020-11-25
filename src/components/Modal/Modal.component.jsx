import React from 'react';
import { Modal } from 'antd';
import './Modal.styles.css';

function ModalComponent({ show, toggle, handleSubmit, title, children }) {
  return (
    <>
      <Modal
        title={title}
        visible={show}
        onOk={handleSubmit}
        onCancel={toggle}
        footer={[]}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalComponent;
