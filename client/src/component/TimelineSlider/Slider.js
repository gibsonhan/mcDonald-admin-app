import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, } from 'framer-motion';
import { device } from '../../global/devices'
import handleSliderType from '../../hooks/handleSliderType';
import handleResetMotionDiv from '../../hooks/handleResetMotionDiv'

//const data = Data({ rotate: 0 })

const SliderContainer = styled.div`
  position: relative;
  background: red;
  width: 100%;
  height: 100%;
`;

const LineContainer = styled.div`
  position: absolute;

  @media ${device.tablet} {
    top: 20px;
    width: 100%;
    height: 10px;
    background: ${(prop) => prop.color};
  }
  
`;

//styled(motion.div) ?? need to understand this
const CircleContainer = styled(motion.div)`
  position: absolute;
  height: 50px;
  width: 50px;
  background: ${(prop) => prop.color};
  border-radius: 50%;
`;

const circle = {
  xAxis: { scale: 1, left: 0 },
  yAxis: { scale: 1, top: 0 },
  hover: { scale: 0.5 },
  pressed: { scale: 1.5 },
};

const Slider = () => {
  const sliderRef = useRef();
  const axis = handleSliderType()  //rename hanldeAxis => handleSliderType
  const resetKey = handleResetMotionDiv(axis)

  //TODO -> handle translation of position
  return (
    <SliderContainer ref={sliderRef}>
      <LineContainer color={'black'} />
      <CircleContainer
        key={resetKey}
        variants={circle}
        color={'yellow'}
        drag={axis}
        dragConstraints={sliderRef}
        //onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      />
    </SliderContainer>
  );
}

const MobileSlider = styled(Slider)`

`

export default Slider;