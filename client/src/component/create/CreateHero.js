import React, { useRef } from 'react';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { createSingleImgUrl } from '../../util/createSingleImgUrl';
import { create, update } from '../../util/service';
import { HERO, UPDATE, CREATE } from '../../global/reserveWord';
import { HEROINPUTS } from '../../global/tempData';
import { useAppContext } from '../../global/context';

import Input from '../common/Input';
import PreviewImg from '../common/PreviewImg';
import Btn from '../common/Btn';

const CreateHero = ({ defaultValues }) => {
  const buttonRef = useRef();
  const buttonTxt = !!defaultValues ? UPDATE + ' ' + HERO : CREATE + ' ' + HERO;
  const { dispatchAdd, dispatchUpdate, history } = useAppContext();
  const { control, errors, handleSubmit, register } = useForm({});

  function clickInput() {
    !!buttonRef && buttonRef.current.click();
  }

  async function handleCreateHero(data) {
    try {
      const response = await create(HERO, data);
      dispatchAdd(HERO, { ...data, id: response });
    } catch (error) {
      console.log('fail to create hero', error);
    }
  }

  async function handleUpdateHero(data) {
    const id = history.location.state.id;
    try {
      await update(HERO, id, data);
      dispatchUpdate(HERO, { ...data, id });
    } catch (error) {
      console.log('fail to upage hero');
    }
  }

  const onSubmit = async (_formData) => {
    const { heroImg, ...formObj } = _formData;
    const data = {
      ...formObj,
      img: await createSingleImgUrl(heroImg, formObj.title),
    };

    !defaultValues ? handleCreateHero(data) : handleUpdateHero(data);
  };

  return (
    <CreateHeroContainer>
      <FormContainer>
        <PreviewImg
          register={register}
          title={HERO}
          defaultImg={defaultValues.img}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          {!!HEROINPUTS &&
            HEROINPUTS.map((item) => {
              const df = !!defaultValues ? defaultValues[item] : '';
              return (
                <Input
                  key={item}
                  defaultValue={df}
                  name={item}
                  register={register}
                  control={control}
                  errors={errors}
                />
              );
            })}
          <Btn
            type="submit"
            clickRef={buttonRef}
            handleOnClick={clickInput}
            color="grey"
            justify="center"
            txt={buttonTxt}
          />
        </form>
      </FormContainer>
    </CreateHeroContainer>
  );
};

const CreateHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default CreateHero;
