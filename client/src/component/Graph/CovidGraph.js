import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js'
import styled from 'styled-components';

const CovidGraph = () => {
  const chartRef = useRef()

  //https://medium.com/@sapucaialuann/using-chartjs-and-react-hooks-to-create-a-line-chart-related-to-an-api-acef68f62d46
  //https://www.youtube.com/watch?v=A5KaLpqzRi4


  /** Dont be distracted when trying ot implement his 
   * 
   */
  useEffect(() => {

  }, [])
  return <CovidGraphContainer>
  </CovidGraphContainer>;
};

const CovidGraphContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default CovidGraph;
