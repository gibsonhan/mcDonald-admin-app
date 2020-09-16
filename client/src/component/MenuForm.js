import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { create, update } from '../util/service';
import { createSingleImgUrl } from '../util/createSingleImgUrl';
import { MENU } from '../global/reserveWord';
import { MENUINPUTS } from '../global/tempData';
import { useAppContext } from '../global/context';

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';

const MenuForm = ({ children, preloadData }) => {
  const {
    dispatchAdd,
    dispatchUpdate,
    history,
    isLoading,
    setIsLoading,
  } = useAppContext();
  const defaultImg = !preloadData ? '' : preloadData.img;

  const preloadDefault = MENUINPUTS.reduce((acc, curr) => {
    acc[curr] = !!preloadData ? preloadData[curr] : '';
    return acc;
  }, {});

  const setDefaultValues = !preloadData ? '' : preloadDefault;
  const { control, errors, handleSubmit, register } = useForm({
    defaultValues: setDefaultValues,
  });
  const id = history.location.state.id;

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
    }, 2000);
  }

  async function handleUpdateMenu(data) {
    try {
      await update(MENU, id, data);
      dispatchUpdate(MENU, { ...data, id });
    } catch (error) {
      console.log('fail to upage menu');
    }
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

  return (
    <FormContainer>
      <PreviewImg register={register} name={MENU} defaultImg={defaultImg} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!MENUINPUTS &&
          MENUINPUTS.map((item) => {
            return (
              <Input
                key={item}
                name={item}
                register={register}
                errors={errors}
                control={control}
              />
            );
          })}
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
