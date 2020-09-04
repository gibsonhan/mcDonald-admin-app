import React, { useEffect } from 'react';
import styled from 'styled-components';

import { COUPON, HERO, ITEM, MENU } from '../global/reserveWord';

import { useAppContext } from '../global/context';

import Text from '../component/common/Text';
import EscapeBtn from '../component/common/EscapeBtn';
import escapeKey from '../hooks/handleEscapekey';

import CreateCoupon from '../component/create/CreateCoupon';
import CreateHero from '../component/create/CreateHero';
import CreateItem from '../component/create/CreateItem';
import CreateMenu from '../component/create/CreateMenu';

const createObj = {
  [COUPON]: <CreateCoupon />,
  [HERO]: <CreateHero />,
  [ITEM]: <CreateItem />,
  [MENU]: <CreateMenu />,
};

const Create = () => {
  const { history } = useAppContext();
  const goBack = () => history.goBack();
  escapeKey(goBack);

  return (
    <CreateContainer>
      <Header>
        <Text size={50}>Title</Text>
        <EscapeBtn />
      </Header>
      <Body>{createObj['coupon']}</Body>
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
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div`
  display: flex;
  flex: 4;
  background: yellow;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export default Create;
