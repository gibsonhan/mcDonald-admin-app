import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { Switch, TextField } from '@material-ui/core';
import Input from '../common/Input';
import { useRouteMatch } from 'react-router-dom';

import { createServingTimeArr } from '../../util/createServingTimeArr';
import { createsizeObj } from '../../util/createSizesObj';

import {
  DEFAULTITEMVALUES as defaultValues,
  ITEMINPUTS,
  ITEMSIZES,
  SIZEMOREINFO,
  SERVINGTIMES,
} from '../../global/tempData';

const Create = ({ title }) => {
  //TODO: FUTURE: CMS where it creates the shape
  const { path, route, url } = useRouteMatch();
  //TODO CMS schmea creator
  //functional program would be usefull her composeThree(a, b, c)
  const inputSchema = ITEMINPUTS.reduce((acc, curr) => {
    acc[curr] = yup.string().required();
    return acc;
  }, {});

  const sizesArrSchema = ITEMSIZES.reduce((acc, curr) => {
    acc[curr] = yup.boolean().required();
    acc[curr + 'Price'] = yup.number().positive();
    acc[curr + 'Calories'] = yup.number().positive();
    return acc;
  }, {});

  const schema = yup.object().shape({ ...inputSchema, ...sizesArrSchema });
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formObjData) => {
    //TODO: FP method? for CMS in the future?
    console.log('formObjData', formObjData);
    const { name, group, subGroup, couponGroup, ...sizeObjInfo } = formObjData;

    const servingTime = createServingTimeArr(formObjData, SERVINGTIMES);
    const size = createsizeObj(ITEMSIZES, formObjData, sizeObjInfo);
    const item = {
      name,
      group,
      subGroup,
      couponGroup,
      servingTime,
      size,
      created: new Date(),
      lastEdit: {
        date: new Date(),
        author: 'Admin',
      },
    };

    console.log(item);
    const config = {
      headers: { Authorization: 'temp' },
    };
    const baseUrl = 'http://localhost:3001/api/item/create';
    try {
      const response = await axios.post(baseUrl, item);
      console.log('created and a new item', response);
    } catch (error) {
      console.log('Failed to create item', error);
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
          <SwitchButtonGroup
            key={'serving'}
            title={'Serving'}
            data={SERVINGTIMES}
            register={register}
            control={control}
          />
          {/* TODO: when user enable size, group price input**/}
          <SwitchButtonGroup
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

const SwitchButtonGroup = ({ title, data, control, register, error }) => {
  return (
    <>
      <label>{title}</label>
      {data.map((item) => (
        <HighlightBtn
          key={item}
          title={item}
          register={register}
          control={control}
          error={error}
        />
      ))}
    </>
  );
};

//TODO: Double check the register
const HighlightBtn = ({ title, control, register, error }) => {
  const [showPriceAndCal, setShowPriceAndCal] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  useEffect(() => {
    const showInput = !!ITEMSIZES.includes(title) && !!switchOn;
    showInput ? setShowPriceAndCal(true) : setShowPriceAndCal(false);
  }, [switchOn]);

  return (
    <SwitchGroup>
      <SwitchContainer>
        <label>{title}</label>
        <Controller
          name={title}
          control={control}
          render={(props) => (
            <Switch
              onChange={(e) => {
                setSwitchOn((prev) => !prev);
                return props.onChange(e.target.checked);
              }}
              checked={props.value}
            />
          )}
        />
      </SwitchContainer>
      {showPriceAndCal && (
        <PriceAndCalories title={title} control={control} error={error} />
      )}
    </SwitchGroup>
  );
};

const PriceAndCalories = ({ title, control }) => {
  return (
    <PriceAndCalContainer>
      {SIZEMOREINFO.map((item) => (
        <Controller
          as={TextField}
          key={title + item}
          name={title + item}
          label={item}
          type={'number'}
          InputLabelProps={{ shrink: true }}
          control={control}
        />
      ))}
    </PriceAndCalContainer>
  );
};

const PriceAndCalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SwitchGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

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
