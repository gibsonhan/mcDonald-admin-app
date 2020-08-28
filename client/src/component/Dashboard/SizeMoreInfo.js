import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { SIZEMOREINFO } from '../../global/tempData';
import PreviewImg from '../common/PreviewImg';

//Need to understand control and register
const SizeMoreInfo = ({ title, register, control }) => {
  return (
    <SizeMoreInfoContainer>
      <PreviewImg register={register} title={title} />
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
    </SizeMoreInfoContainer>
  );
};

const SizeMoreInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PriceAndCalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SizeMoreInfo;
