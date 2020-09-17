import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Controller } from 'react-hook-form';
import { Switch } from '@material-ui/core';
import Text from './Text';

const SwitchBtn = ({ name, register, control, errors }) => {
  return (
    <SwitchBtnContainer>
      <Text>{name}</Text>
      <Controller
        name={name}
        control={control}
        render={(props) => (
          <Switch
            onChange={(e) => {
              return props.onChange(e.target.checked);
            }}
            checked={props.value}
          />
        )}
      />
      {/* {errors[name] && console.log(errors[name])} */}
    </SwitchBtnContainer>
  );
};

const SwitchBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rem(15)};
`;

export default SwitchBtn;
