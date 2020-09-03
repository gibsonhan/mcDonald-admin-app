import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Modal from './common/Modal';
import CreateCoupon from './CreateCoupon';
import CreateHero from './CreateHero';
import CreateItem from './CreateItem';
import CreateMenu from './CreateMenu';

import { ITEM, MENU, HERO, COUPON } from '../global/reserveWord';
import handleToggleState from '../util/handleToggleState';
import { useAppContext } from '../global/context';

const CreateModal = ({ type }) => {
  const { oneModalOpen, setOneModalOpen } = useAppContext();
  const [openModal, setOpenModal] = useState(false);
  const buttonTitle = type[0].toUpperCase() + type.slice(1, type.length);

  const toggleModal = () => {
    if (!oneModalOpen) {
      handleToggleState(setOpenModal);
      setOneModalOpen(true);
    } else {
      console.log('one modal is already open');
    }
  };

  const OBJ = {
    [HERO]: <CreateHero />,
    [ITEM]: <CreateItem />,
    [MENU]: <CreateMenu />,
    [COUPON]: <CreateCoupon />,
  };
  return (
    <CreateModalContainer>
      <button onClick={toggleModal}> Create {buttonTitle} </button>
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        {OBJ[type]}
      </Modal>
    </CreateModalContainer>
  );
};

const CreateModalContainer = styled.div``;

export default CreateModal;
