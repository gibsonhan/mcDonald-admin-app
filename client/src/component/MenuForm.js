import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { create, update } from '../util/service';
import { createSingleImgUrl } from '../util/createSingleImgUrl';
import { MENU, NAME, GROUP } from '../global/reserveWord';
import { MENUINPUTS } from '../global/tempData';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';
import Input from './common/Input';
import PreviewImg from './common/PreviewImg';
import SubMenuPreview from './SubMenuPreview';
import TransferList from './TransferList';
import Modal from './common/Modal';

const MenuForm = ({ children, preloadData }) => {
  const {
    dispatchAdd,
    dispatchUpdate,
    history,
    isLoading,
    setIsLoading,
  } = useAppContext();

  const [subMenu, setSubMenu] = useState({
    size: 0,
    list: {},
  });
  const [openModal, setOpenModal] = useState(false);
  const defaultImg = !preloadData ? '' : preloadData.img;
  const id = history.location.state.id;

  const preloadDefault = MENUINPUTS.reduce((acc, curr) => {
    acc[curr] = !!preloadData ? preloadData[curr] : '';
    return acc;
  }, {});

  const setDefaultValues = !preloadData ? '' : preloadDefault;
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const { control, errors, handleSubmit, register } = useForm({
    defaultValues: setDefaultValues,
  });

  async function handleCreateMenu(data) {
    setIsLoading((prev) => true);
    try {
      await create(MENU, data);
      dispatchAdd(MENU, { ...data, id });
    } catch (error) {
      console.log('fail to create hero', error);
    }

    setTimeout(() => {
      setIsLoading((prev) => false);
      history.goBack();
    }, 1000);
  }

  async function handleUpdateMenu(data) {
    setIsLoading((prev) => true);
    try {
      await update(MENU, id, data);
      dispatchUpdate(MENU, { ...data, id });
    } catch (error) {
      console.log('fail to upage menu');
    }

    setTimeout(() => {
      setIsLoading((prev) => false);
      history.goBack();
    }, 1000);
  }

  /**TODO: might need immer
   * 	If there is nothign to update. Dont update state
   *
   * TODO: Think and implement logic to handle update image
   * 1. need to block re upload if image url does not change?
   *  if preloadData
   * 		length < 0 do not update
   * 		else true
   *
   *
   */

  const onSubmit = async (_formData) => {
    if (isLoading) return;

    const { name, menuImg } = _formData;
    const img = await createSingleImgUrl(menuImg, name);
    const data = {
      name,
      subMenu: subMenu,
      img,
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };

    preloadData ? handleUpdateMenu(data) : handleCreateMenu(data);
  };

  useEffect(() => {
    console.log(subMenu);
  }, [subMenu]);

  return (
    <FormContainer>
      <PreviewImg register={register} name={MENU} defaultImg={defaultImg} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name={NAME}
          register={register}
          errors={errors}
          control={control}
        />
        <SubMenuPreview props={subMenu} />
        <Modal isOpen={openModal} setIsOpen={setOpenModal}>
          <TransferList setSubMenu={setSubMenu} setModalState={setOpenModal} />
        </Modal>
        <Btn
          color="grey"
          handleOnClick={toggleModal}
          txt="Create Sub Menu"
          justify="center"
        />
        <ChildrenContainer>{children}</ChildrenContainer>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default MenuForm;
