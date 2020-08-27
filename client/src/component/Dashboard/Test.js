import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Test = () => {
  const [nodes, setNodes] = useState([]);

  //https://codepen.io/frcodecamp/post/a-react-example-drag-and-drop-with-html5-api

  function addNodes(nodeObj) {
    setNodes((prev) => [prev, ...nodeObj]);
    console.log(nodes);
  }

  //Mouse event should occur
  //When it enters
  //when it leaves
  return (
    <TestContainer>
      <BubbleSpirt />
    </TestContainer>
  );
};

/**
 *
 * @param {*} param0
 * something i need to work on is reading the docs, rather than scanning.
 *  Sometimes scanning is good to see if the information is releavent to what i am learning
 *  Slow learning, might want to avoid scanning majority of the tiem
 *  https://codepen.io/frcodecamp/pen/OEovqx
 */

const BubbleSpirt = () => {
  const [position, setPosition] = useState({});
  const [x, setXPosition] = useState('0px');
  const [y, setYPosition] = useState('0px');

  function updateCoord(e) {
    console.log('update coord', e.nativeEvent);
  }

  function finalPos(e) {
    const { screenX, screenY } = e.nativeEvent;
    console.log('finalpos', screenX, screenY);
    const finalPostObj = {
      x: String(screenX) + 'px',
      y: String(screenY) + 'px',
    };
    setPosition((prev) => finalPostObj);
  }

  return (
    <BubbleContainer
      position={{ x: position.x, y: position.y }}
      draggable="true"
      onDrag={(e) => updateCoord(e)}
      onDragEnd={(e) => finalPos(e)}
    >
      x:{position.x} y: {position.y}
    </BubbleContainer>
  );
};

/**
 *  What i learned to day is you need to think out the requirements for the feature then implement the features
 *  trying to just expertiment is good when you are lost with what to do but having a rough draft would help alot
 *
 */

const BubbleContainer = styled.div`
  position: absolute;
  background-color: lightsalmon;
  height: 100px;
  width: 100px;
  top: ${(props) => props.position.y};
  left: ${(props) => props.position.x};
`;

const TestContainer = styled.div`
  position: relative;
  min-height: 500px;
  min-width: 500px;
  background-color: green;
`;
export default Test;

//Create a single drag and drop,
//- update the x and y corrindates? how to add deal, RXJs?
//
