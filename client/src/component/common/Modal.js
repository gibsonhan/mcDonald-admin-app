import React from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, setIsOpen, children }) => {
  const closeModal = function hanleCloseModal(e) {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  if (!isOpen) return <></>;
  return (
    <ModalContainer>
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
