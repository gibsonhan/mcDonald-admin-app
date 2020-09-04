import React, { useState } from 'react';
import Modal from './common/Modal';
import styled from 'styled-components';

import { useAppContext } from '../global/context';

const Edit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { oneModalOpen, setOneModalOpen } = useAppContext();
  const openModal = () => {
    if (oneModalOpen) return;
    setIsOpen(true);
    setOneModalOpen(true);
  };
  console.log('fuck all');
  return (
    <EditContainer>
      <button onClick={openModal}> Edit</button>
      <ModalContainer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          Hello world
        </Modal>
      </ModalContainer>
    </EditContainer>
  );
};

const EditContainer = styled.div``;

const ModalContainer = styled.div`
  display: absolute;
  top: 0;
  left: 0;
`;

export default Edit;
