import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../global/context';

const Modal = ({ isOpen, setIsOpen, children }) => {
  const modalRef = useRef();
  const { setOneModalOpen } = useAppContext();

  const closeModal = function hanleCloseModal(e) {
    e.preventDefault();
    setIsOpen(false);
    setOneModalOpen(false);
  };

  function EL_closeModal(e) {
    function clickOutsideModal() {
      if (!modalRef.current) return;
      return modalRef.current.contains(e.target) ? false : true;
    }
    if (e.key === 'Escape' || clickOutsideModal()) {
      setIsOpen(false);
      setOneModalOpen(false);
    }
  }

  useEffect(() => {
    if (!!isOpen) {
      window.addEventListener('click', EL_closeModal);
      window.addEventListener('keydown', EL_closeModal);
    }
    return () => {
      window.removeEventListener('click', EL_closeModal);
      window.removeEventListener('keydown', EL_closeModal);
    };
  }, [isOpen]);

  if (!isOpen) return <></>;
  return (
    <ModalContainer ref={modalRef}>
      <CloseContainer>
        <CloseButton onClick={closeModal}>X</CloseButton>
      </CloseContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 200px;
  left: 100px;

  height: 500px;
  width: 500px;
  background: green;
  z-index: 10;
`;

const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  height: 100px;
  min-width: 100%;
  background: yellow;
`;

const CloseButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background: red;
`;

const ChildrenContainer = styled.div`
  flex: 9;
`;

export default Modal;
