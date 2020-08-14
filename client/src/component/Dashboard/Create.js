import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { Switch } from '@material-ui/core';
import Input from '../common/Input';

const defaultValues = {
  highlight: false,
  newCases: 0,
  totalDeaths: 0,
  tweetUrls: 'input',
  videoUrls: 'input',
};

const Create = () => {
  //TODO: FUTURE: CMS where it creates the shape
  const inputs = [
    'collection',
    'name',
    'group',
    'subMenu',
    'servingTime',
    'price',
    'mealPrice',
    'sizes',
  ];

  const itemSchema = inputs.reduce((acc, curr) => {
    acc[curr] = yup.string();
    return acc;
  }, {});

  const schema = yup.object().shape(itemSchema);

  const { register, handleSubmit, errors, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log('on Submit');
    const entryData = {
      ...data,
      date: new Date(),
      created: new Date(),
      lastUpdate: new Date(),
    };
    try {
      console.log(entryData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateContainer>
      <DisplayContainer>Hello</DisplayContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((item) => (
            <Input key={item} type={item} register={register} errors={errors} />
          ))}
          <button type="submit">Add New Item</button>
        </form>
      </FormContainer>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const DisplayContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbab7e;
`;
export default Create;
