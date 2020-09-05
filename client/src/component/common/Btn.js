import React from 'react';
import styled from 'styled-components';
import Text from '../common/Text';
import { rem } from 'polished';

const Btn = ({ children, flex, handleOnClick, justify }) => {
  const click = () => handleOnClick() || console.log('no click');
  return (
    <BtnContainer flex={flex} justify={justify}>
      <Button onClick={click}>
        <Text justify={'center'}>{children}</Text>
      </Button>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex};
  justify-content: ${({ justify }) => justify};
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  background: yellow;
  align-items: center;

  height: ${rem(40)};
  width: ${rem(150)};

  border-radius: ${rem(6)};
`;
export default Btn;
