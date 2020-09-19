import React from 'react';
import styled from 'styled-components';
import Text from '../common/Text';
import { rem } from 'polished';

const Btn = ({
  type,
  clickRef,
  color,
  disable,
  height,
  width,
  children,
  flex,
  handleOnClick,
  justify,
  txt,
}) => {
  const click = (e) => {
    e && e.preventDefault();
    const disableButton = !handleOnClick || disable;
    return disableButton ? console.log('no click') : handleOnClick();
  };
  return (
    <BtnContainer flex={flex} justify={justify}>
      <Button onClick={click} height={height} width={width} color={color}>
        <Text justify={'center'}>
          {children} {txt}
        </Text>
      </Button>
      {type && <input ref={clickRef} type={type} style={{ display: 'none' }} />}
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
  background: ${({ color }) => color};
  align-items: center;

  height: ${({ height }) => (!!height ? rem(height) : rem(40))};
  width: ${({ width }) => (!!width ? rem(width) : rem(150))};

  border-radius: ${rem(6)};
`;
export default Btn;
