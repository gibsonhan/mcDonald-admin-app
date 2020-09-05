import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from '../common/Input';
import PreviewImg from '../common/PreviewImg';
import { create } from '../../util/service';
import { createSingleImgUrl } from '../../util/createSingleImgUrl';
import { MENU } from '../../global/reserveWord';
import { useAppContext } from '../../global/context';

const CreateMenuForm = ({ title, inputs, children }) => {
  const { dispatchAdd } = useAppContext();
  const { control, errors, handleSubmit, register } = useForm({});

  const onSubmit = async (_formData) => {
    const { name, group, menuImg } = _formData;
    const data = {
      name,
      img: await createSingleImgUrl(menuImg, name),
      //group: [{ name: 'Snacsk', items: ['A', 'B', 'C'] }],
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };
    try {
      const response = await create(MENU, data);
      dispatchAdd(MENU, { ...data, id: response });
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
            <Input
              key={item}
              name={item}
              register={register}
              errors={errors}
              control={control}
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

export default CreateMenuForm;
