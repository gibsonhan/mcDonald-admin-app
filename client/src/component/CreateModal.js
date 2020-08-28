import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from './common/Modal';
import CreateCoupon from './CreateCoupon';
import CreateHero from './CreateHero';
import CreateItem from './CreateItem';
import CreateMenu from './CreateMenu';

import { ITEM, MENU, HERO, COUPON } from '../global/reserveWord';
import handleToggleState from '../util/handleToggleState';

const CreateModal = ({ type }) => {
  const [openModal, setOpenModal] = useState(false);
  const buttonTitle = type[0].toUpperCase() + type.slice(1, type.length);
  const toggleModal = () => handleToggleState(setOpenModal);

  const OBJ = {
    [HERO]: <CreateHero />,
    [ITEM]: <CreateItem />,
    [MENU]: <CreateMenu />,
    [COUPON]: <CreateCoupon />,
  };
  return (
    <CreateModalContainer>
      <button onClick={toggleModal}> Create + {buttonTitle} </button>
      <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        {OBJ[type]}
      </Modal>
    </CreateModalContainer>
  );
};

const CreateModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CreateModal;
