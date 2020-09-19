import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppContext } from '../global/context';
import { ITEM } from '../global/reserveWord';

import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { Checkbox } from '@material-ui/core';

import Btn from './common/Btn';
import { isEmpty } from '../util/handleIsEmpty';

function remove(a, obj) {
  let test = obj.filter((item) => a.includes(item.id) === false);
  console.log(test);
  return test;
}

function filter(obj, b) {
  return obj.filter((item) => b.includes(item.id));
}

const TransferList = ({ edit, ref }) => {
  const { state } = useAppContext();
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [checked, setChecked] = useState([]);
  let rightChecked = filter(right, checked);
  let leftChecked = filter(left, checked);

  function setPreload() {}

  useEffect(() => {
    console.log('left', left);
    console.log('right', right);
    console.log('checked', checked);
  }, [left, right, checked]);

  useEffect(() => {
    console.log('item check', state[ITEM]);
    !edit ? setRight((prev) => state[ITEM]) : setPreload({ group: 'items' });
  }, []);

  function handleMoveLeft() {
    let rightChecked = filter(right, checked);
    setLeft(rightChecked);
    setRight(remove(checked, right));
    setChecked(remove(checked, rightChecked));
  }
  function handleMoveRight() {
    setRight(leftChecked);
    setLeft(remove(checked, left));
    setChecked(remove(checked, leftChecked));
  }

  function handleReset() {
    //!edit ? setRight(state[ITEM]) : setPreload({ group: 'items' });
  }
  if (isEmpty(left) && isEmpty(right)) return <></>;
  return (
    <TransferListContainer>
      <TransferItemList
        checked={checked}
        setChecked={setChecked}
        title={'right'}
        data={left}
      />
      <TransferControlContainer>
        <Btn
          color="blue"
          disable={rightChecked.length === 0}
          handleOnClick={() => handleMoveLeft()}
        >
          {`<<`}
        </Btn>
        <Btn
          color="grey"
          disable={leftChecked.length == 0}
          handleOnClick={() => handleMoveRight()}
        >
          {`>>`}
        </Btn>
        <Btn color="red"> reset </Btn>
      </TransferControlContainer>
      <TransferItemList
        checked={checked}
        setChecked={setChecked}
        title={'left'}
        data={right}
      />
    </TransferListContainer>
  );
};

const TransferItemList = ({ data, checked, setChecked }) => {
  return (
    <ListContainer>
      <AutoSizer>
        {({ height, width }) => (
          <List
            itemData={{
              list: data,
              checked: checked,
              setChecked: setChecked,
            }}
            height={height}
            width={width}
            itemCount={data.length}
            itemSize={40}
          >
            {TransferItemRow}
          </List>
        )}
      </AutoSizer>
    </ListContainer>
  );
};

const TransferItemRow = ({ data, index }) => {
  const { list, checked, setChecked } = data;
  const id = list[index].id;
  const name = list[index].name;

  const handleToggle = (id) => {
    const currIndx = checked.indexOf(id);
    const newCheckedList = [...checked];

    if (currIndx === -1) {
      newCheckedList.push(id);
    } else {
      newCheckedList.splice(currIndx, 1);
    }

    setChecked(newCheckedList);
  };
  return (
    <TransferItemRowContainer key={id} onClick={() => handleToggle(id)}>
      <Checkbox checked={checked.includes(id)} />
      <ImgBox> H </ImgBox>
      <div>{name}</div>
    </TransferItemRowContainer>
  );
};

const TransferItemRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgBox = styled.div`
  height: 30px;
  width: 30px;
  background-color: red;
`;

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
