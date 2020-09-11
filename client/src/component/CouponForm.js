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
import { useAppContext } from '../global/context';

const CouponForm = ({ inputs, children, defaultValues }) => {
  const { dispatchAdd, dispatchUpdate, history } = useAppContext();
  const { control, errors, handleSubmit, register } = useForm({});
  const defaultImg = !!defaultValues ? defaultValues.img : 'none';

  async function handleCreateCoupon(data) {
    console.log('inside create');
    try {
      const response = await create(COUPON, data);
      dispatchAdd(COUPON, { ...data, id: response });
    } catch (error) {
      console.log('fail to create hero', error);
    }
  }

  async function handleUpdateCoupon(data) {
    console.log('update');
    const id = history.location.state.id;
    try {
      let response = await update(COUPON, id, data);
      console.log('checking response', response);
      dispatchUpdate(COUPON, { ...data, id });
    } catch (error) {
      console.log('fail to udate hero', error);
    }
  }

  const onSubmit = async (_formData) => {
    const { couponImg, ...formObj } = _formData;
    const data = {
      ...formObj,
      img: await createSingleImgUrl(couponImg, formObj.title),
    };

    !defaultValues ? handleCreateCoupon(data) : handleUpdateCoupon(data);
  };

  return (
    <FormContainer>
      <PreviewImg register={register} title={COUPON} defaultImg={defaultImg} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!inputs &&
          inputs.map((item) => {
            const df = !!defaultValues ? defaultValues[item] : '';
            return (
              <Input
                key={item}
                defaultValue={df}
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
