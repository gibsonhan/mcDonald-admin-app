import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { COUPON, HERO, ITEM, MENU } from '../global/reserveWord';

import { useAppContext } from '../global/context';

import Text from '../component/common/Text';
import EscapeBtn from '../component/common/EscapeBtn';
import initEscapekey from '../hooks/handleEscapekey';
import fetchDefaultValue from '../hooks/handleDefaultValues';

import CreateCoupon from '../component/common/CreateCoupon';
import CreateHero from '../component/common/CreateHero';
import Item from '../component/Item';
import CreateMenu from '../component/common/CreateMenu';

//TODO Refactor Create and Edit into a single form?
const Create = () => {
  const { history } = useAppContext();
  const id = history.location.state.id;
  const key = history.location.state.type;
  const preloadData = fetchDefaultValue(key, id);
  const goBack = () => history.goBack();

  const { defaultValues } = preloadData;
  const createObj = {
    [COUPON]: <CreateCoupon {...defaultValues} />,
    [HERO]: <CreateHero {...defaultValues} />,
    [ITEM]: <Item preloadValues={defaultValues} />,
    [MENU]: <CreateMenu {...defaultValues} />,
  };

  initEscapekey(goBack);

  return (
    <CreateContainer>
      <Header>
        <Text size={50}>{key.toUpperCase()}</Text>
        <EscapeBtn />
      </Header>
      <Body>{createObj[key]}</Body>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 100%;
  width: 100%;
`;
const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  flex: 4;
  display: flex;
  background: yellow;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Create;
