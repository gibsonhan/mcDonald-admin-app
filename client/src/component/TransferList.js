import React, { useEffect, useState, useRef } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';
import { ITEM } from '../global/reserveWord';
import { useAppContext } from '../global/context';

import AutoSizer from 'react-virtualized-auto-sizer';
import { Checkbox, TextField } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';

import Btn from './common/Btn';

const TransferList = ({ edit, setSubMenu, setModalState, groupName }) => {
  const { state } = useAppContext();
  const groupNameRef = useRef();
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [checked, setChecked] = useState([]);
  const defaultGroupName = !groupName ? '' : defaultGroupName;
  let rightChecked = filter(right, checked);
  let leftChecked = filter(left, checked);

  const moveRight = () => handleMoveRight();
  const moveLeft = () => handleMoveLeft();
  const reset = () => handleReset();
  const save = () => handleSave(left);

  function remove(a, obj) {
    return obj.filter((item) => a.includes(item.id) === false);
  }

  function filter(obj, b) {
    return obj.filter((item) => b.includes(item.id));
  }

  function setDefaultLists() {
    setLeft([]);
    setRight(state[ITEM]);
  }

  function setWithPreload() {
    setRight([]);
    setLeft([]);
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
    !edit ? setDefaultLists() : setWithPreload();
  }

  function handleSave(arr) {
    const name = groupNameRef.current.value;
    if (arr.length === 0 || name.length === 0) return;

    setSubMenu((prev) => {
      let idArr = arr.map((item) => ({ id: item.id, name: item.name }));
      let newObj = { [name]: idArr };
      return {
        ...prev,
        ...newObj,
      };
    });

    setModalState(false);
  }

  useEffect(() => {
    !edit ? setDefaultLists() : setWithPreload();
  }, []);

  if (isEmpty(left) && isEmpty(right)) return <></>;
  return (
    <>
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
          <Btn color="green" txt="save" handleOnClick={save} />
        </TransferControlContainer>
        <TransferItemList
          checked={checked}
          setChecked={setChecked}
          title={'left'}
          data={right}
        />
      </TransferListContainer>
    </>
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

export default TransferList;
