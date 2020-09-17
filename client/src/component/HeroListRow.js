import React from 'react';
import styled from 'styled-components';

import { HERO } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';
import HeroCard from './HeroCard';
import Btn from './common/Btn';

const HeroListRow = ({ index, data, style }) => {
  const { id, ...props } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();

  const navToEdit = (e) => {
    handleNavEditPage(HERO, id);
  };

  const removeHero = async (e) => {
    try {
      await remove(HERO, id);
      dispatchRemove(HERO, id);
    } catch (error) {
      console.log('failed to remove hero', error);
    }
  };
  const btnSize = {
    height: 80,
    width: 80,
  };

  return (
    <RowContainer style={style}>
      <HeroCard props={props} />
      <BtnContainer>
        <Btn handleOnClick={navToEdit} {...btnSize} color="blue" txt="Edit" />
        <Btn handleOnClick={removeHero} {...btnSize} color="red" txt="Remove" />
      </BtnContainer>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
  margin: auto;
  max-width: 1000px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default HeroListRow;
