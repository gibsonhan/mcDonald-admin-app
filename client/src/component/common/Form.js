import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from './Input';
import PreviewImg from './PreviewImg';
import { createMenu } from '../../util/service';
import { createSingleImgUrl } from '../../util/createSingleImgUrl';

const Form = ({ title, inputs, children }) => {
  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = async (_formData) => {
    const { name, groups, ...imgObj } = _formData;
    const data = {
      name,
      groups,
      img: await createSingleImgUrl(name, imgObj),
    };

    try {
      const response = await createMenu(data);
      console.log('Menu Created', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <PreviewImg register={register} title={title} />
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

export default Form;
