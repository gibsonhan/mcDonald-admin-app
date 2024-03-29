import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Switch } from '@material-ui/core';

import { ITEMSIZES } from '../global/defaultInputs';
import { Controller } from 'react-hook-form';
import SizeMoreInfo from './common/SizeMoreInfo';

const SwitchButtonGroup = ({ title, data, control, register, error }) => {
  return (
    <>
      <label>{title}</label>
      {data.map((item) => (
        <SwitchBtn
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
const SwitchBtn = ({ title, control, register, error }) => {
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
      </SwitchContainer>
      {showPriceAndCal && (
        <SizeMoreInfo
          title={title}
          control={control}
          register={register}
          error={error}
        />
      )}
    </SwitchGroup>
  );
};

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

export default SwitchButtonGroup;
