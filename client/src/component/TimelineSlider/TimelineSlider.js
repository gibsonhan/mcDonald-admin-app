import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { device } from '../../global/devices';
import Slider from './Slider'
//Build for mobile first. I wonder if you can transform
const TimelineSliderContainer = styled.div`
  grid-area: slider;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 50px;
  max-width: 50px;
  background: 'red';
  
  @media ${device.tablet} {
    flex-direction: row;
    height: 50px;
    max-width: 100%;
  }
  
`;

const TimelineSlider = () => {
  const [currStep, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(212);
  const [circlePos, setCirclePos] = useState({ x: '-25px', y: '0px' });

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);

  const Days = 212;

  useEffect(() => {
    if (sliderWidth != 0) {
      let widthPerStep = sliderWidth / maxStep;
      let newPos = {
        ...circlePos,
        x: -25 + currStep * widthPerStep + 'px',
      };

      if (currStep <= maxStep) {
        setCirclePos((prevState) => newPos);
      }
      console.log(currStep);
    }
  }, [currStep]);
  return (
    <TimelineSliderContainer>
      <Arrow type={'decrement'} setStep={setStep} />
      <Slider />
      <Arrow type={'increment'} setStep={setStep} maxStep={maxStep} />
    </TimelineSliderContainer>
  );
};

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background: yellow;
`;

const Arrow = ({ type, setStep, maxStep }) => {
  const arrowRef = useRef(null);
  const arrow = type === 'decrement' ? 'up' : 'dwn';

  const events = {
    onClick: () => handleStep(type),
    onTouchStart: () => handleStep(type),
  };

  function handleStep(direction) {
    console.log(direction);
    direction === 'increment'
      ? setStep((prevState) => {
        return prevState > maxStep ? maxStep : (prevState += 1);
      })
      : setStep((prevState) => {
        return prevState === 0 ? 0 : (prevState -= 1);
      });
  }

  function handleKey(e) {
    /**
     *  38 -> UP
     *  39 -> RIGHT
     *  40 -> DOWN
     *  37 -> LEFT
     */
    if (e.keyCode === 39 || e.keyCode === 40) {
      handleStep('increment');
    }

    if (e.keyCode === 37 || e.keyCode === 38) {
      handleStep('decrement');
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKey);
    return () => window.removeEventListener('keyup', handleKey);
  }, [handleKey]);

  return (
    <ArrowContainer ref={arrowRef} {...events}>
      {arrow}
    </ArrowContainer>
  );
};

export default TimelineSlider;
