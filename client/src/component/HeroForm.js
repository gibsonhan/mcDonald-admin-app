import React, { useRef } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { createSingleImgUrl } from '../util/createSingleImgUrl';
import { create, update } from '../util/service';
import { DEFAULTVALUES_EDIT } from '../global/defaultValues';
import { isEmpty } from '../util/handleIsEmpty';
import { HERO } from '../global/reserveWord';
import { HEROINPUTS } from '../global/tempData';
import { useAppContext } from '../global/context';

import Input from './common/Input';
import PreviewImg from './common/PreviewImg';

const HeroForm = ({ children, preloadData }) => {
  const { dispatchAdd, dispatchUpdate, history } = useAppContext();
  const setDefaultValue = isEmpty(preloadData)
    ? DEFAULTVALUES_EDIT
    : preloadData;
  const { control, errors, handleSubmit, register } = useForm({
    defaultValues: setDefaultValue,
  });
  const defaultImg = isEmpty(preloadData) ? '' : preloadData.img;
  const id = history.location.state.id;

  async function handleCreateForm(data) {
    try {
      const response = await create(HERO, data);
      dispatchAdd(HERO, { ...data, id: response });
    } catch (error) {
      console.log('fail to create hero', error);
    }
  }

  async function handleUpdateHeroForm(data) {
    try {
      await update(HERO, id, data);
      dispatchUpdate(HERO, { ...data, id });
    } catch (error) {
      console.log('fail to upage hero');
    }
  }

  const onSubmit = async (_formData) => {
    const { title, heroImg, ...formObj } = _formData;

    const data = {
      ...formObj,
      img: await createSingleImgUrl(heroImg, title),
    };

    preloadData ? handleCreateForm(data) : handleUpdateHeroForm(data);
  };

  return (
    <HeroFormContainer>
      <PreviewImg register={register} title={HERO} defaultImg={defaultImg} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!HEROINPUTS &&
          HEROINPUTS.map((item) => {
            return (
              <Input
                key={item}
                name={item}
                register={register}
                control={control}
                errors={errors}
              />
            );
          })}
        <ChildrenContainer>{children}</ChildrenContainer>
      </form>
    </HeroFormContainer>
  );
};

const HeroFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ChildrenContainer = styled.div``;

export default HeroForm;
