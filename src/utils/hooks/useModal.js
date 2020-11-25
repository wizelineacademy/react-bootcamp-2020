import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  function setStatusModal(state) {
    setIsShowing(state);
  }

  return {
    isShowing,
    toggle,
    setStatusModal,
  };
};

export default useModal;
