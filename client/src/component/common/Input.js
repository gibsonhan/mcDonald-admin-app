import React from 'react';
import styled from 'styled-components';

const Input = ({ type, register, errors }) => {
  const firstLetter = type[0].toUpperCase();
  const sliceWord = type.slice(1, type.length);
  const title = firstLetter + sliceWord;
  return (
    <InputContainer>
      <label htmlFor={type}>{title}</label>
      <input
        autoComplete="off"
        type="text"
        name={type}
        id={type}
        ref={register({ required: true, maxLength: 30 })}
      />
      {errors[type] && errors[type].message}
      {errors[type] && errors[type].type === 'required' && (
        <span>This is required</span>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Input;
