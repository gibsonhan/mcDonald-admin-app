import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useRouteMatch } from 'react-router-dom';
import * as yup from 'yup';

import { createServingTimeArr } from '../../util/createServingTimeArr';
import { createImgObj } from '../../util/createImgObj';
import { createSizeObj } from '../../util/createSizesObj';
import { createItem } from '../../util/service';

import Input from '../common/Input';
import SwitchBtnGroup from './SwitchButtonGroup';

import {
  DEFAULTITEMVALUES as defaultValues,
  ITEMINPUTS,
  ITEMSIZES,
  SERVINGTIMES,
} from '../../global/tempData';
const Create = ({ title }) => {
  const inputSchema = ITEMINPUTS.reduce((acc, curr) => {
    acc[curr] = yup.string().required();
    return acc;
  }, {});

  //https://www.youtube.com/watch?v=tYGTjxhzrqY
  const sizesArrSchema = ITEMSIZES.reduce((acc, curr) => {
    acc[curr] = yup.boolean().required();
    acc[curr + 'Price'] = yup.number().positive();
    acc[curr + 'Calories'] = yup.number().positive();
    acc[curr + 'Img'] = yup.mixed();
    return acc;
  }, {});

  const schema = yup.object().shape({ ...inputSchema, ...sizesArrSchema });
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formObjData) => {
    const { name, group, subGroup, couponGroup, ...sizeObjInfo } = formObjData;
    const data = {
      name,
      group,
      subGroup,
      couponGroup,
      servingTime: createServingTimeArr(formObjData, SERVINGTIMES),
      size: createSizeObj(ITEMSIZES, formObjData, sizeObjInfo),
      img: await createImgObj(ITEMSIZES, name, sizeObjInfo),
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };

    try {
      const response = await createItem({ ...data });
      console.log('created and a new item', response);
    } catch (error) {
      console.log('Failed to create item');
    }
  };

  return (
    <CreateContainer>
      <DisplayContainer>Hello</DisplayContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {ITEMINPUTS.map((item) => (
            <Input key={item} name={item} register={register} errors={errors} />
          ))}
          <SwitchBtnGroup
            key={'serving'}
            title={'Serving'}
            data={SERVINGTIMES}
            register={register}
            control={control}
          />
          {/* TODO: when user enable size, group price input**/}
          <SwitchBtnGroup
            key={'sizesArr'}
            title={'Allowed Sizes'}
            data={ITEMSIZES}
            register={register}
            control={control}
          />
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
