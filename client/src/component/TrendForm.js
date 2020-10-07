import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import { isEmpty } from '../util/handleIsEmpty';
import { TRENDINPUTS } from '../global/defaultInputs';
import { TREND } from '../global/reserveWord';

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';
import { createSingleImgUrl } from '../util/createSingleImgUrl';
import { create, update } from '../util/service';
import { useAppContext } from '../global/context';

const TrendForm = ({ children, preloadData }) => {
  const defaultImg = isEmpty(preloadData) ? '' : preloadData.img;
  const { dispatchAdd, history, isLoading, setIsLoading } = useAppContext();
  const id = history.location.state.id;
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: '',
    //resolver: yupResolver(schema),
  });

  async function handleCreateTrendCard(data) {
    setIsLoading((prev) => true);
    try {
      const id = await create(TREND, data);
      dispatchAdd(TREND, { ...data, id });
    } catch (error) {
      console.log('fail to create trend card', error);
    }
    setTimeout(() => {
      setIsLoading((prev) => false);
      history.goBack();
    }, 1000);
  }

  const onSubmit = async (formData) => {
    const { trendImg, ...formObj } = formData;
    const img = await createSingleImgUrl(trendImg, formObj.title);
    const data = {
      ...formObj,
      img: img,
    };

    await handleCreateTrendCard(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <PreviewImg register={register} name={TREND} defaultImg={defaultImg} />
      {TRENDINPUTS.map((item) => {
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
      {children}
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default TrendForm;
