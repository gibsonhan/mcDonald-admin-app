import React from 'react';
import styled from 'styled-components';
import Text from '../common/Text';
import { rem } from 'polished';

const Btn = ({
  color,
  height,
  width,
  children,
  flex,
  handleOnClick,
  justify,
}) => {
  const click = (e) => {
    e.preventDefault();
    return !!handleOnClick ? handleOnClick() : console.log('no click');
  };
  console.log(height, width);
  return (
    <BtnContainer flex={flex} justify={justify}>
      <Button onClick={click} height={height} width={width} color={color}>
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
  background: ${({ color }) => color};
  align-items: center;

  height: ${({ height }) => (!!height ? rem(height) : rem(40))};
  width: ${({ width }) => (!!width ? rem(width) : rem(150))};

  border-radius: ${rem(6)};
`;
export default Btn;
