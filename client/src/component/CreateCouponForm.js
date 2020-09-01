import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';
import { create } from '../util/service';
import { createSingleImgUrl } from '../util/createSingleImgUrl';
import { COUPON } from '../global/reserveWord';

const CreateCouponForm = ({ title, inputs, children }) => {
  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = async (_formData) => {
    const { couponImg, ...formObj } = _formData;
    const data = {
      ...formObj,
      img: await createSingleImgUrl(couponImg, formObj.title),
    };
    try {
      const response = await create(COUPON, data);
      console.log('coupon check', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <PreviewImg register={register} title={COUPON} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!inputs &&
          inputs.map((item) => (
            <Input key={item} name={item} register={register} errors={errors} />
          ))}
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

export default CreateCouponForm;
