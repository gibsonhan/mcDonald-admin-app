import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Text from '../common/Text';
import Btn from '../common/Btn';

const CreateHeroPreview = () => {
  let data = {
    img: '',
    title: 'Free Fries Day',
    titleContent: 'Enjoy free Medium Fries with a minium',
    titleContent2: '$1 Mobile Order & Pay purchase',
    btnText: 'View Deals',
    btnColor: 'yellow',
    navLink: 'Deals',
    dateRestriction: 'Friday',
    legal:
      "Get free Medium Fries with a minium $1 Mobile Order & Pay purchase, tax excl. Valid 1x/ Friday thru 9/27 at participating McD. Mobile Order & Pay at participating McD. McD app registration required. © 2020 McDonald's ",
  };
  return (
    <PreviewContainer>
      <MainContent>
        <TextContainer>
          <Text size={30} flex={1} padding={0}>
            {data.title}
          </Text>
          <Text flex={0.25} size={16} padding={0}>
            {data.titleContent}
          </Text>
          <Text flex={0.25} size={16}>
            {data.titleContent2}
          </Text>
          <Btn flex={1} justify={'center'}>
            {data.btnText}
          </Btn>
        </TextContainer>

        <PictureContainer> hello </PictureContainer>
      </MainContent>
      <LegalContainer>
        <Text size={10} padding={12}>
          {data.legal}
        </Text>
      </LegalContainer>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.div`
  width: 100%;
  height: auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: green;
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
