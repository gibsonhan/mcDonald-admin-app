import React from 'react';
import styled from 'styled-components';
import { device } from '../global/devices';

import CovidGraph from '../component/Graph/CovidGraph';
import MediaContent from '../component/Main/MediaContent';
import TimelineSlider from '../component/TimelineSlider/TimelineSlider';

const Home = () => {
  return (
    <HomeContainer>
      <Graph />
      <Main />
      <Slider />
    </HomeContainer>
  );
};

//TODO feature to drag and adjust the scalling
const HomeContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;

  grid-template-areas:
    'slider graph'
    'slider main';

  grid-template-rows: 40% 1fr;
  grid-template-columns: 10% 1fr;

  @media ${device.tablet} {
    grid-template-areas:
      'graph main'
      'slider slider';

    grid-template-rows: 80% 1fr;
    grid-template-columns: 50% 1fr;
  }
`;
//This is pretty dope
const Graph = styled(CovidGraph)`
  grid-area: graph;
`;

const Main = styled(MediaContent)`
  grid-area: main;
`;

const Slider = styled(TimelineSlider)`
  grid-area: slider;
`;

export default Home;
