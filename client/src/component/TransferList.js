import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';
import { ITEM, GROUP, NAME, TEXT } from '../global/reserveWord';
import { useAppContext } from '../global/context';

import AutoSizer from 'react-virtualized-auto-sizer';
import { Checkbox } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { FixedSizeList as List } from 'react-window';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';

import Btn from './common/Btn';
import Input from './common/Input';

function remove(a, obj) {
  return obj.filter((item) => a.includes(item.id) === false);
}

function filter(obj, b) {
  return obj.filter((item) => b.includes(item.id));
}

const TransferList = ({
  control,
  edit,
  errors,
  setGroupItem,
  name,
  register,
  watch,
}) => {
  const { state } = useAppContext();
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);
  const [checked, setChecked] = useState([]);
  let rightChecked = filter(right, checked);
  let leftChecked = filter(left, checked);

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

  function handleSave(groupname, left) {
    let test = {
      [groupname]: left,
    };
    console.log(test);
  }

  useEffect(() => {
    !edit ? setDefaultLists() : setWithPreload();
  }, []);

  if (isEmpty(left) && isEmpty(right)) return <></>;
  return (
    <>
      <Input
        name={name}
        register={register}
        errors={errors}
        control={control}
      />
      {console.log(watch)}
      {watch && (
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
            <Btn color="red" handleOnClick={() => handleReset()}>
              reset
            </Btn>
            <Btn
              color="green"
              txt="save"
              handleOnClick={() => handleSave(watch, left)}
            />
          </TransferControlContainer>
          <TransferItemList
            checked={checked}
            setChecked={setChecked}
            title={'left'}
            data={right}
          />
        </TransferListContainer>
      )}
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
