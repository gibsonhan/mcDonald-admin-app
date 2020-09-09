import React from 'react';
import styled from 'styled-components';

import { HERO } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';
import HeroCard from './HeroCard';
import Btn from './common/Btn';

const HeroListRow = ({ index, data }) => {
  const { id, ...props } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();

  const navToEdit = (e) => {
    e.preventDefault();
    handleNavEditPage(HERO, id);
  };

  const removeHero = async (e) => {
    e.preventDefault();
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
    <RowContainer>
      <HeroCard props={props} />
      <BtnContainer>
        <Btn handleOnClick={navToEdit} {...btnSize} color="blue">
          Edit
        </Btn>
        <Btn handleOnClick={removeHero} {...btnSize} color="red">
          Remove
        </Btn>
      </BtnContainer>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default HeroListRow;
