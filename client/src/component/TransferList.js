import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppContext } from '../global/context';
import { ITEM } from '../global/reserveWord';

import List from './common/List';
import Btn from './common/Btn';
import PreviewImg from './common/PreviewImg';
import { Checkbox } from '@material-ui/core';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const TransferList = ({ edit, control, register, errors }) => {
  const { state } = useAppContext();
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [checked, setChecked] = useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  function setPreload() {}

  useEffect(() => {
    !edit ? setRight(state[ITEM]) : setPreload({ group: 'items' });
  }, []);

  useEffect(() => {
    console.log(right);
  }, [right]);

  function handleMoveLeft() {
    setLeft(left.concat(leftChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, leftChecked));
  }

  function handleMoveRight() {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  }

  function handleReset() {
    !edit ? setRight(state[ITEM]) : setPreload({ group: 'items' });
  }

  return (
    <TransferListContainer>
      <TransferItemList checked={checked} title={'right'} data={left} />
      <TransferControl />
      <TransferItemList checked={checked} title={'left'} data={right} />
    </TransferListContainer>
  );
};

const TransferItemList = ({ checked, data }) => {
  return (
    <ListContainer>
      <List data={data} props={checked} row={TransferItemRow} />
    </ListContainer>
  );
};

const TransferItemRow = ({ data, index, props }) => {
  console.log('data check', data);
  const imgUrl = data[index].regularImg;
  const name = data[index].name;
  const id = data[index].id;

  const handleToggle = (id) => {
    //checked.concat(id);
  };

  console.log('check', props);
  return (
    <TransferItemRowContainer key={id} onClick={handleToggle}>
      <Checkbox checked={1} />
      <ImgBox> H </ImgBox>
      <div>{name}</div>
    </TransferItemRowContainer>
  );
};

const TransferItemRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ImgBox = styled.div`
  height: 30px;
  width: 30px;
  background-color: red;
`;

const TransferControl = () => {
  return (
    <TransferControlContainer>
      <Btn color="blue"> left </Btn>
      <Btn color="grey"> right </Btn>
      <Btn color="red"> reset </Btn>
    </TransferControlContainer>
  );
};

const TransferListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TransferControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background: white;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  height: 200px;
  width: 300px;
`;

export default TransferList;
