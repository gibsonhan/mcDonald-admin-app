import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

import Text from './Text';

const Input = ({ name, type, control, errors }) => {
  const firstLetter = name[0].toUpperCase();
  const sliceWord = name.slice(1, name.length);
  const title = firstLetter + sliceWord;
  return (
    <InputContainer>
      <Controller
        as={TextField}
        label={title}
        type={type}
        autoComplete="off"
        name={name}
        variant="outlined"
        control={control}
      />
      {errors[name] && (
        <Text justify="center" padding={10}>
          {errors[name] && errors[name].message}
        </Text>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(15)};
`;

export default Input;
