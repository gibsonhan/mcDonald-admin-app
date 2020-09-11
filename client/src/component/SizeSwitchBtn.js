import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PreviewImg from './common/PreviewImg';
import Input from './common/Input';
import SwitchBtn from './common/SwitchBtn';
import { NUMBER } from '../global/reserveWord';

//Need to understand control and register
const SizeSwitchBtn = ({ showMore, name, register, control, errors }) => {
  return (
    <SizeSwitchBtnContainer>
      <SwitchBtn name={name} control={control} />
      <MoreInputContainer visible={showMore}>
        <PreviewImg name={name} register={register} />
        <Input
          name={name + 'Price'}
          type={NUMBER}
          register={register}
          control={control}
          errors={errors}
        />
        <Input
          name={name + 'Calories'}
          type={NUMBER}
          register={register}
          control={control}
          errors={errors}
        />
      </MoreInputContainer>
    </SizeSwitchBtnContainer>
  );
};

const SizeSwitchBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  display: ${({ visible }) => (!!visible ? '' : 'none')};
`;

export default SizeSwitchBtn;
