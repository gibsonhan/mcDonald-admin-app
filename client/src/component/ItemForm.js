import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { createServingTimeObj } from '../util/handleServingTime';
import { createImgObj } from '../util/createImgObj';
import { createSizeObj } from '../util/createSizesObj';
import { create, update } from '../util/service';
import { ITEM, SERVINGTIME, TEXT, NAME, NUMBER } from '../global/reserveWord';

import Input from '../component/common/Input';
import SwitchBtnGroup from './SwitchButtonGroup';

import {
  ITEMINPUTS,
  ITEMSIZES,
  SERVINGTIMES,
  SIZEMOREINFO,
} from './../global/tempData';

import { ITEMVALUES_OBJ as defaultValues } from '../global/defaultValues';
import { useAppContext } from '../global/context';
import SwitchBtn from './common/SwitchBtn';
import SizeSwitchBtn from './SizeSwitchBtn';

const ItemForm = ({ preloadValues, children }) => {
  const { dispatchAdd, dispatchUpdate, history } = useAppContext();

  // const inputSchema = ITEMINPUTS.reduce((acc, curr) => {
  //   acc[curr] = yup.string().required();
  //   return acc;
  // }, {});

  // const sizesArrSchema = ITEMSIZES.reduce((acc, curr) => {
  //   acc[curr] = yup.boolean().required();
  //   acc[curr + 'Price'] = yup.number().positive();
  //   acc[curr + 'Calories'] = yup.number().positive();
  //   acc[curr + 'Img'] = yup.mixed();
  //   return acc;
  // }, {});

  // const schema = yup.object().shape({ ...inputSchema, ...sizesArrSchema });

  const { register, handleSubmit, errors, watch, control } = useForm({
    defaultValues: preloadValues || defaultValues,
    //resolver: yupResolver(schema),
  });

  const small = watch('small');
  const xSmall = watch('xSmall');
  const regular = watch('regular');
  const large = watch('large');
  const xLarge = watch('xLarge');

  async function handleCreateItem(data) {
    console.log('creating item');
    try {
      const response = await create(ITEM, data);
      dispatchAdd(ITEM, { ...data, id: response });
    } catch (error) {
      console.log('fail to create Item', error);
    }
  }

  async function handleUpdateItem(data) {
    console.log('updaing item ');
    const id = history.location.state.id;
    try {
      await update(ITEM, id, data);
      dispatchUpdate(ITEM, { ...data, id });
    } catch (error) {
      console.log('fail to upage Item');
    }
  }

  const onSubmit = async (formData) => {
    const { name, group, subGroup, couponGroup, ...sizeObjInfo } = formData;
    const data = {
      name,
      group,
      subGroup,
      couponGroup,
      servingTime: createServingTimeObj(formData),
      size: createSizeObj(formData),
      img: await createImgObj(name, sizeObjInfo),
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };
    !preloadValues ? handleCreateItem(data) : handleUpdateItem(data);
  };

  return (
    <ItemFormContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input name={NAME} type={TEXT} control={control} errors={errors} />
        {SERVINGTIMES.map((time) => (
          <SwitchBtn
            key={time}
            register={register}
            name={time}
            control={control}
            errors={errors}
          />
        ))}
        <SizeSwitchBtn
          name={'xSmall'}
          register={register}
          control={control}
          showMore={xSmall}
          errors={errors}
        />
        <SizeSwitchBtn
          name={'small'}
          register={register}
          control={control}
          showMore={small}
          errors={errors}
        />
        <SizeSwitchBtn
          name={'regular'}
          register={register}
          control={control}
          showMore={regular}
          errors={errors}
        />
        <SizeSwitchBtn
          name={'large'}
          register={register}
          control={control}
          showMore={large}
          errors={errors}
        />
        <SizeSwitchBtn
          name={'xLarge'}
          register={register}
          control={control}
          showMore={xLarge}
          errors={errors}
        />
        <ChildrenContainer>{children}</ChildrenContainer>
      </FormContainer>
    </ItemFormContainer>
  );
};

const ItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fbab7e;
`;

const ChildrenContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default ItemForm;
