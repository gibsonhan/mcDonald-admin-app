import React from 'react';
import styled from 'styled-components';

const Input = ({ name, register, errors }) => {
  const firstLetter = name[0].toUpperCase();
  const sliceWord = name.slice(1, name.length);
  const title = firstLetter + sliceWord;
  return (
    <InputContainer>
      <label htmlFor={name}>{title}</label>
      <input
        autoComplete="off"
        type="text"
        name={name}
        id={name}
        ref={register({ required: true, maxLength: 30 })}
      />
      {errors[name] && errors[name].message}
      {errors[name] && errors[name].name === 'required' && (
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
