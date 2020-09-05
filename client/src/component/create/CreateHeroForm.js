import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from '../common/Input';
import PreviewImg from '../common/PreviewImg';

import { createSingleImgUrl } from '../../util/createSingleImgUrl';
import { create } from '../../util/service';
import { HERO } from '../../global/reserveWord';
import { useAppContext } from '../../global/context';

const CreateHeroForm = ({ title, inputs, children }) => {
  const { dispatchAdd } = useAppContext();
  const { control, errors, handleSubmit, register } = useForm({});

  const onSubmit = async (_formData) => {
    const { heroImg, ...formObj } = _formData;
    const data = {
      ...formObj,
      img: await createSingleImgUrl(heroImg, formObj.title),
    };

    try {
      const response = await create(HERO, data);
      console.log('check response', response);
      dispatchAdd(HERO, { ...data, id: response });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <PreviewImg register={register} title={HERO} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!inputs &&
          inputs.map((item) => (
            <Input
              key={item}
              name={item}
              register={register}
              control={control}
              errors={errors}
            />
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
