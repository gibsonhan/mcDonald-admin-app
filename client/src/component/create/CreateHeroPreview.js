import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Text from '../common/Text';

import PreviewImg from '../common/PreviewImg';
import Btn from '../common/Btn';
import { HERO } from '../../global/reserveWord';

const CreateHeroPreview = ({ props }) => {
  const { title, titleContent, titleContent2, btnText, legal, img } = props;
  const ImgStyle = {
    height: '100%',
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
          <Btn flex={1} justify={'center'}>
            {btnText}
          </Btn>
        </TextContainer>
        <PictureContainer>Hello1</PictureContainer>
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
  height: auto;
  margin: auto;
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
  background: grey;
`;

const LegalContainer = styled.div``;

export default CreateHeroPreview;
