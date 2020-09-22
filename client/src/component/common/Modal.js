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
    if (clickOutsideModal()) {
      setIsOpen(false);
      setOneModalOpen(false);
    }
  }

  useEffect(() => {
    if (!!isOpen) {
      window.addEventListener('click', EL_closeModal);
    }
    return () => {
      window.removeEventListener('click', EL_closeModal);
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

  top: 0;
  left: 0;

  height: auto;
  width: auto;
  background: grey;
  z-index: 10;
`;

const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  height: 100px;
  min-width: 100%;
  background: lightblue;
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
