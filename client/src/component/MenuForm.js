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

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';
import TransferList from './TransferList';

const MenuForm = ({ children, preloadData }) => {
  const {
    dispatchAdd,
    dispatchUpdate,
    history,
    isLoading,
    setIsLoading,
  } = useAppContext();

  const defaultImg = !preloadData ? '' : preloadData.img;
  const id = history.location.state.id;
  const preloadDefault = MENUINPUTS.reduce((acc, curr) => {
    acc[curr] = !!preloadData ? preloadData[curr] : '';
    return acc;
  }, {});

  const setDefaultValues = !preloadData ? '' : preloadDefault;
  const { control, errors, handleSubmit, register, watch } = useForm({
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

    const { name, group, menuImg } = _formData;
    const img = await createSingleImgUrl(menuImg, name);
    const data = {
      name,
      group,
      img,
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };
    preloadData ? handleUpdateMenu(data) : handleCreateMenu(data);
  };

  const groupName1 = watch('groupname1');
  const [groupItem, setGroupItem] = useState({});

  useEffect(() => {
    console.log(groupItem);
  }, [groupItem]);

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

        <TransferList
          name={GROUP + NAME + '1'}
          setGroupItem={setGroupItem}
          register={register}
          control={control}
          errors={errors}
          watch={groupName1}
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
