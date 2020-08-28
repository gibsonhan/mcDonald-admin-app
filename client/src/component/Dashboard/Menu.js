import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Modal from '../common/Modal';
import CreateItem from './CreateItem';
import CreateMenu from './CreateMenu';
import handleToggleState from '../../util/handleToggleState';

const Menu = () => {
  const [openItemMod, setItemMod] = useState(false);
  const [openMenuMod, setMenuMod] = useState(false);
  const [openCouponMod, setCouponMod] = useState(false);

  const toggleMenuMod = () => handleToggleState(setMenuMod);
  const toggleItemMod = () => handleToggleState(setItemMod);
  const toggleCouponMod = () => handleToggleState(setCouponMod);

  //TODO Refactor?
  return (
    <MenuContainer>
      <button onClick={toggleMenuMod}> Create Menu </button>
      <Modal isOpen={openMenuMod} setIsOpen={setMenuMod}>
        <CreateMenu toggleMod={toggleMenuMod} />
      </Modal>
      <button onClick={toggleItemMod}> Create Item </button>
      <Modal isOpen={openItemMod} setIsOpen={setItemMod}>
        <CreateItem toggleMod={toggleItemMod} />
      </Modal>
      <button onClick={toggleCouponMod}> Create Menu </button>
      <Modal isOpen={openCouponMod} setIsOpen={setCouponMod}>
        <p>Create Coupon Mod</p>
      </Modal>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Menu;
