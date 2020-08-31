import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';

import { createSingleImgUrl } from '../util/createSingleImgUrl';
import { createHero } from '../util/service';

const CreateHeroForm = ({ title, inputs, children }) => {
  const { register, handleSubmit, errors } = useForm({});

  const onSubmit = async (_formData) => {
    const { heroImg, ...formObj } = _formData;
    const data = {
      ...formObj,
      img: await createSingleImgUrl(heroImg, formObj.title),
    };

    try {
      const response = await createHero(data);
      console.log('check', response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <PreviewImg register={register} title={'hero'} />
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

export default CreateHeroForm;
