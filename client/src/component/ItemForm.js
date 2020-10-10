import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { createServingTimeObj } from '../util/handleServingTime';
import { createImgObj } from '../util/createImgObj';
import { createSizeObj } from '../util/createSizesObj';
import { create, update } from '../util/service';
import { isEmpty } from '../util/handleIsEmpty';
//TODO go over google style guide. I need to slow down with my work
//Rhytem of coding.
import { ITEMVALUES_ARR, ITEMVALUES_OBJ } from '../global/defaultValues';
import { ITEM, NAME, TEXT, SERVINGTIME } from '../global/reserveWord';
import { SERVINGTIMES } from '../global/defaultInputs';
import { useAppContext } from '../global/context';

import timeOut from '../util/handleTimeOut';

import Input from '../component/common/Input';
import SwitchBtn from './common/SwitchBtn';
import SizeSwitchBtn from './SizeSwitchBtn';

const ItemForm = ({ preloadData, children }) => {
  const {
    dispatchAdd,
    dispatchUpdate,
    history,
    setIsLoading,
  } = useAppContext();
  const id = history.location.state.id;
  const setDefaultValues = isEmpty(preloadData)
    ? ITEMVALUES_OBJ
    : formatPreload(preloadData);

  function formatPreload(obj) {
    let servingTimeObj = {
      ...obj.servingTime,
    };

    let imgObj = {
      ...obj.img,
    };

    const { list, ...sizes } = obj.size;
    const _arrList = new Array(...list);

    let sizeObj = notEmpty(_arrList) ? unpackSizeObj(_arrList, sizes) : 'none';

    function notEmpty(array) {
      return array.length > 0 ? true : false;
    }

    function unpackSizeObj(_arr, _obj) {
      return _arr.reduce((acc, size) => {
        for (let item in _obj[size]) {
          let key = size + item[0].toUpperCase() + item.slice(1, item.length);
          acc[key] = _obj[size][item];
        }
        acc[size] = true;
        return acc;
      }, {});
    }

    //TODO handle image => update
    return { ...ITEMVALUES_OBJ, ...servingTimeObj, ...imgObj, ...sizeObj };
  }

  const { register, handleSubmit, errors, watch, control } = useForm({
    defaultValues: setDefaultValues,
    //resolver: yupResolver(schema),
  });

  const small = watch('small');
  const xSmall = watch('xSmall');
  const regular = watch('regular');
  const large = watch('large');
  const xLarge = watch('xLarge');

  async function handleCreateItem(data) {
    setIsLoading((prev) => true);
    try {
      await create(ITEM, data);
      dispatchAdd(ITEM, { ...data, id });
    } catch (error) {
      console.log('fail to create Item', error);
    }

    setTimeout(() => {
      setIsLoading((prev) => false);
      history.goBack();
    }, 1000);
  }

  async function handleUpdateItem(data) {
    console.log('updaing item ');
    setIsLoading((prev) => true);
    try {
      await update(ITEM, id, data);
      dispatchUpdate(ITEM, { ...data, id });
    } catch (error) {
      console.log('fail to upage Item');
    }

    await timeOut(() => setIsLoading((prev) => false), 2);
    history.goBack();
  }

  const onSubmit = async (formData) => {
    const { name, ...sizeObjInfo } = formData;
    const data = {
      name,
      servingTime: createServingTimeObj(formData),
      size: createSizeObj(formData),
      img: await createImgObj(name, sizeObjInfo),
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };
    console.log(data);
    //isEmpty(preloadData) ? handleCreateItem(data) : handleUpdateItem(data);
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
