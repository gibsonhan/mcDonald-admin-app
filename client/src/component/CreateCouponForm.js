import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';
import { createCoupon } from '../util/service';
import { createSingleImgUrl } from '../util/createSingleImgUrl';

const CreateCouponForm = ({ title, inputs, children }) => {
  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = async (_formData) => {
    const { title, couponImg, ...formObj } = _formData;

    const data = {
      title,
      formObj,
      img: await createSingleImgUrl(couponImg, title),
    };
    try {
      const response = await createCoupon(data);
      console.log('check', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <PreviewImg register={register} title={'coupon'} />
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
