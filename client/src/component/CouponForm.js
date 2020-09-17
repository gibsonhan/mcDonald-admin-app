import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';

import { create, update } from '../util/service';
import { createSingleImgUrl } from '../util/createSingleImgUrl';
import { COUPON } from '../global/reserveWord';
import { COUPONINPUTS } from '../global/tempData';
import { isEmpty } from '../util/handleIsEmpty';
import { useAppContext } from '../global/context';

const CouponForm = ({ children, preloadData }) => {
  const {
    dispatchAdd,
    dispatchUpdate,
    history,
    isLoading,
    setIsLoading,
  } = useAppContext();
  const setDefaultValues = isEmpty(preloadData) ? '' : preloadData;
  const { control, errors, handleSubmit, register } = useForm({
    defaultValues: setDefaultValues,
  });
  const defaultImg = isEmpty(preloadData) ? '' : preloadData.img;
  const id = history.location.state.id;

  async function handleCreateCoupon(data) {
    try {
      await create(COUPON, data);
      dispatchAdd(COUPON, { ...data, id });
    } catch (error) {
      console.log('fail to create coupon', error);
    }
    setIsLoading((prev) => false);
  }

  async function handleUpdateCoupon(data) {
    setIsLoading((prev) => true);
    try {
      await update(COUPON, id, data);
      dispatchUpdate(COUPON, { ...data, id });
    } catch (error) {
      console.log('fail to update coupon', error);
    }
    setIsLoading((prev) => false);
  }

  const onSubmit = async (_formData) => {
    if (isLoading) return;
    console.log(_formData);
    const { couponImg, ...formObj } = _formData;
    const data = {
      ...formObj,
      // img: await createSingleImgUrl(couponImg, formObj.title),
    };

    //isEmpty(preloadData) ? handleCreateCoupon(data) : handleUpdateCoupon(data);
  };

  return (
    <FormContainer>
      <PreviewImg register={register} name={COUPON} defaultImg={defaultImg} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!COUPONINPUTS &&
          COUPONINPUTS.map((item) => {
            return (
              <Input
                key={item}
                name={item}
                register={register}
                control={control}
                errors={errors}
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

export default CouponForm;
