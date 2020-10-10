import React, { useEffect, useState, useRef } from 'react';

import AutoSizer from 'react-virtualized-auto-sizer';
import { Checkbox, TextField } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import { rem } from 'polished';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';
import { ITEM } from '../global/reserveWord';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';

const TransferList = ({ preloadData, setSubMenu, setModalState }) => {
  const { state } = useAppContext();
  const groupNameRef = useRef();
  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const leftChecked = filter(left, checked);
  const rightChecked = filter(right, checked);
  const defaultGroupName = isEmpty(preloadData) ? '' : preloadData.name;
  const tranferBtnTxt = isEmpty(preloadData) ? 'save' : 'update';
  const transferCTA = () =>
    isEmpty(preloadData) ? handleSave(left) : handleSave(left);

  const moveRight = () => handleMoveRight();
  const moveLeft = () => handleMoveLeft();
  const reset = () => handleReset();

  function remove(a, obj) {
    return obj.filter((item) => a.includes(item.id) === false);
  }

  function filter(obj, b) {
    return obj.filter((item) => b.includes(item.id));
  }

  function setDefaultList() {
    setLeft([]);
    setRight(state[ITEM]);
  }

  function setWith(obj) {
    setLeft(filter(state[ITEM], obj.id));
    setRight(remove(obj.id, state[ITEM]));
  }

  function handleMoveLeft() {
    setLeft(left.concat(rightChecked));
    setRight(remove(checked, right));
    setChecked(remove(checked, rightChecked));
  }
  function handleMoveRight() {
    setRight(right.concat(leftChecked));
    setLeft(remove(checked, left));
    setChecked(remove(checked, leftChecked));
  }

  function handleReset() {
    isEmpty(preloadData) ? setDefaultList() : setWith(preloadData);
  }

  function handleSave(arr) {
    const name = groupNameRef.current.value;
    if (arr.length === 0 || name.length === 0) return;

    setSubMenu((prev) => {
      let idArr = arr.map((item) => ({ id: item.id, name: item.name }));

      let newObj = {
        name: name,
        items: idArr,
      };
      if (prev.length === 0) return [newObj];
      return [prev, newObj];
    });

    setModalState(true);
  }

  useEffect(() => {
    handleReset();
  }, []);

  if (isEmpty(left) && isEmpty(right)) return <></>;

  return (
    <Container>
      <GroupNameContainer>
        <TextField
          id="outlined-secondary"
          label="Sub Menu Group"
          defaultValue={defaultGroupName}
          inputRef={groupNameRef}
        />
      </GroupNameContainer>
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
            handleOnClick={moveLeft}
          >
            {`<<`}
          </Btn>
          <Btn
            color="grey"
            disable={leftChecked.length == 0}
            handleOnClick={moveRight}
          >
            {`>>`}
          </Btn>
          <Btn color="red" handleOnClick={reset}>
            reset
          </Btn>
          <Btn color="green" txt={tranferBtnTxt} handleOnClick={transferCTA} />
        </TransferControlContainer>
        <TransferItemList
          checked={checked}
          setChecked={setChecked}
          title={'left'}
          data={right}
        />
      </TransferListContainer>
    </Container>
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

const GroupNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(15)};
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default TransferList;
