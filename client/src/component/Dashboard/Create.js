import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { Switch } from '@material-ui/core';
import Input from '../common/Input';
import { useRouteMatch } from 'react-router-dom';

const Create = ({ title }) => {
  //TODO: FUTURE: CMS where it creates the shape
  const { path, route, url } = useRouteMatch();
  const inputs = [
    'collection',
    'name',
    'group',
    'subMenu',
    'serving',
    'couponGroup',
    'price',
  ];

  const sizes = ['xSmall', 'small', 'regular', 'large', 'xLarge'];
  const serving = ['breakfast', 'lunch', 'dinner'];

  const defaultValues = {
    collection: title || 'item',
    name: '',
    group: '',
    subGroup: '',
    couponGroup: '',
    //sizes
    xSmall: false,
    small: false,
    regular: false,
    large: false,
    xLarge: false,
    //serving
    breakfast: true,
    lunch: false,
    dinner: false,
  };

  //TODO CMS schmea creator
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
    //TODO: FP method? for CMS in the future?
    const { collection, name, group, subGroup, couponGroup } = data;

    const sizeObj = sizes.reduce(
      (acc, curr) => {
        if (data[curr] === true) {
          acc[curr] = { enable: true, price: 1.0 };
        }
        return acc;
      },
      { default: 'Regular' },
    );

    const servingArr = serving.reduce((acc, curr) => {
      if (data[curr] === true) {
        acc.push(curr);
      }
      return acc;
    }, []);

    console.log(sizeObj);

    const item = {
      collection,
      name,
      group,
      subGroup,
      couponGroup,
      sizes: sizeObj,
      servingTime: servingArr,
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };
    const config = {
      headers: { Authorization: 'temp' },
    };
    const baseUrl = 'http://localhost:3001/api/item/create';
    try {
      //const response = await axios.post(baseUrl, item);
    } catch (error) {
      console.log(error);
    }
    console.log('end');
  };

  return (
    <CreateContainer>
      <DisplayContainer>Hello</DisplayContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((item) => (
            <Input key={item} type={item} register={register} errors={errors} />
          ))}
          <SwitchButtonGroup
            key={'serving'}
            title={'Serving'}
            data={serving}
            register={register}
            control={control}
          />
          {/* TODO: when user enable size, group price input**/}
          <SwitchButtonGroup
            key={'sizes'}
            title={'Allowed Sizes'}
            data={sizes}
            register={register}
            control={control}
          />
          <button type="submit">Add New Item</button>
        </form>
      </FormContainer>
    </CreateContainer>
  );
};

const SwitchButtonGroup = ({ title, data, control, register }) => {
  return (
    <>
      <label>{title}</label>
      {data.map((item) => (
        <HighlightBtn
          key={item}
          title={item}
          register={register}
          control={control}
        />
      ))}
    </>
  );
};

//TODO: Double check the register
const HighlightBtn = ({ title, control, register }) => {
  return (
    <SwitchContainer>
      <label>{title}</label>
      <Controller
        name={title}
        control={control}
        render={(props) => (
          <Switch
            onChange={(e) => props.onChange(e.target.checked)}
            checked={props.value}
          />
        )}
      />
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  label {
    display: flex;
    align-items: center;
  }
`;
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
