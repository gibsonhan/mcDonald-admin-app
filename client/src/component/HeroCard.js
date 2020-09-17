import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import Text from './common/Text';
import Btn from './common/Btn';

const HeroCard = ({ props }) => {
  const {
    title,
    titleContent,
    titleContent2,
    btnText,
    legal,
    img,
    btnColor,
  } = props;
  const ImgStyle = {
    objectFit: 'cover',
    height: '240px',
    width: '100%',
  };
  return (
    <PreviewContainer>
      <MainContent>
        <TextContainer>
          <Text size={30} flex={1} padding={0}>
            {title}
          </Text>
          <Text flex={0.25} size={16} padding={0}>
            {titleContent}
          </Text>
          <Text flex={0.25} size={16}>
            {titleContent2}
          </Text>
          <Btn flex={1} justify={'center'} color={btnColor}>
            {btnText}
          </Btn>
        </TextContainer>
        <PictureContainer>
          {img === 'none' && <div>No Image</div>}
          {img != 'none' && <img src={img} style={ImgStyle} />}
        </PictureContainer>
      </MainContent>
      <LegalContainer>
        <Text size={10} padding={12}>
          {legal}
        </Text>
      </LegalContainer>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.div`
  width: 100%;
  margin: auto;
  max-height: 240px;
  max-width: 800px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  height: 200px;
  background: pink;

  padding: ${rem(20)} 0;
  padding-left: ${rem(20)};
`;

const PictureContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const LegalContainer = styled.div``;

export default HeroCard;
