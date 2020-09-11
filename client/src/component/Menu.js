import React from 'react';
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

const Menu = ({ defaultValues, children }) => {
  const defaultImg = !!defaultValues ? defaultValues.img : '';
  const { dispatchAdd, dispatchUpdate, history } = useAppContext();
  const { control, errors, handleSubmit, register } = useForm({});

  async function handleCreateMenu(data) {
    try {
      const response = await create(MENU, data);
      dispatchAdd(MENU, { ...data, id: response });
    } catch (error) {
      console.log('fail to create hero', error);
    }
  }

  async function handleUpdateMenu(data) {
    const id = history.location.state.id;
    try {
      await update(MENU, id, data);
      dispatchUpdate(MENU, { ...data, id });
    } catch (error) {
      console.log('fail to upage menu');
    }
  }

  const onSubmit = async (_formData) => {
    const { name, group, menuImg } = _formData;
    const data = {
      name,
      img: await createSingleImgUrl(menuImg, name),
      //group: [{ name: 'Snacsk', items: ['A', 'B', 'C'] }],
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };

    console.log(data);

    !defaultValues ? handleCreateMenu(data) : handleUpdateMenu(data);
  };

  return (
    <FormContainer>
      <PreviewImg register={register} title={MENU} defaultImg={defaultImg} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!MENUINPUTS &&
          MENUINPUTS.map((item) => {
            const df = !!defaultValues ? defaultValues[item] : '';
            return (
              <Input
                key={item}
                name={item}
                defaultValue={df}
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

export default Menu;
