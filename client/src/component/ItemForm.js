import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { createServingTimeArr } from '../util/createServingTimeArr';
import { createImgObj } from '../util/createImgObj';
import { createSizeObj } from '../util/createSizesObj';
import { create, update } from '../util/service';
import {
  CREATE,
  ITEM,
  UPDATE,
  SUBMIT,
  SERVINGTIME,
} from '../global/reserveWord';

import Input from '../component/common/Input';
import SwitchBtnGroup from './SwitchButtonGroup';

import { ITEMINPUTS, ITEMSIZES, SERVINGTIMES } from './../global/tempData';
import { useAppContext } from '../global/context';

const ItemForm = ({ preloadValues, children }) => {
  const { dispatchAdd, dispatchUpdate, history } = useAppContext();
  const buttonRef = useRef();
  const buttonTxt = !!preloadValues ? UPDATE + ' ' + ITEM : CREATE + ' ' + ITEM;
  const inputSchema = ITEMINPUTS.reduce((acc, curr) => {
    acc[curr] = yup.string().required();
    return acc;
  }, {});

  const sizesArrSchema = ITEMSIZES.reduce((acc, curr) => {
    acc[curr] = yup.boolean().required();
    acc[curr + 'Price'] = yup.number().positive();
    acc[curr + 'Calories'] = yup.number().positive();
    acc[curr + 'Img'] = yup.mixed();
    return acc;
  }, {});

  const schema = yup.object().shape({ ...inputSchema, ...sizesArrSchema });

  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: preloadValues,
    resolver: yupResolver(schema),
  });

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  async function handleCreateItem(data) {
    try {
      const response = await create(ITEM, data);
      dispatchAdd(ITEM, { ...data, id: response });
    } catch (error) {
      console.log('fail to create Item', error);
    }
  }

  async function handleUpdateItem(data) {
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
    console.log('onSubmit', formData);
    const data = {
      name,
      group,
      subGroup,
      couponGroup,
      servingTime: createServingTimeArr(formData, SERVINGTIMES),
      size: createSizeObj(ITEMSIZES, formData, sizeObjInfo),
      img: await createImgObj(ITEMSIZES, name, sizeObjInfo),
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
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {ITEMINPUTS.map((item) => (
            <Input
              key={item}
              name={item}
              register={register}
              control={control}
              errors={errors}
            />
          ))}
          <SwitchBtnGroup
            key={'serving'}
            title={SERVINGTIME}
            data={SERVINGTIMES}
            register={register}
            control={control}
          />
          {/* TODO: when user enable size, group price input**/}
          {/* { TODO refactor with watch api} */}
          <SwitchBtnGroup
            key={'sizesArr'}
            title={'Size Customization'}
            data={ITEMSIZES}
            register={register}
            control={control}
          />
          <ChildrenContainer>{children}</ChildrenContainer>
        </form>
      </FormContainer>
    </ItemFormContainer>
  );
};

const ItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ChildrenContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbab7e;
`;
export default ItemForm;
