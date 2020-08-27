import React from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from '../component/common/Input';

const Login = ({ history }) => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    history.push('/dashboard/summary');
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="username" register={register} errors={errors} />
        <Input name="password" register={register} errors={errors} />
        <input type="submit" />
      </form>
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled.div`
  display: 'flex';
  flex-direction: column;
`;
