import React from 'react';
import { ModalStyled } from './Modal.style';

function ModalComponent({ show, toggle, handleSubmit, title, children }) {
  return (
    <>
      <ModalStyled
        title={title}
        visible={show}
        onOk={handleSubmit}
        onCancel={toggle}
        footer={[]}
      >
        {children}
      </ModalStyled>
    </>
  );
}

export default ModalComponent;
