import React from 'react';
import styled from 'styled-components';

import { EDIT, TREND } from '../global/reserveWord';
import { remove } from '../util/service';
import { useAppContext } from '../global/context';

import Btn from './common/Btn';

const TrendListRow = ({ index, data }) => {
  const { id, title, title2, navLink } = data[index];
  const { dispatchRemove, handleNavEditPage } = useAppContext();

  const navToEdit = () => handleNavEditPage(EDIT, id);
  const removeMenu = () => handleRemoveMenu();

  const btnProps = {
    flex: 1,
    height: 40,
    width: 100,
  };

  async function handleRemoveMenu() {
    try {
      await remove(TREND, id);
      dispatchRemove(TREND, id);
    } catch (err) {
      console.log('failed to delete', err);
    }
  }
  return (
    <RowContainer>
      <Name>{title + ' ' + title2}</Name>
      <NavLink>{'NavLink: ' + navLink}</NavLink>
      <Btn handleOnClick={navToEdit} {...btnProps} color="blue" txt="Edit" />
      <Btn handleOnClick={removeMenu} {...btnProps} color="red" txt="Remove" />
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Name = styled.div`
  flex: 1;
`;
const NavLink = styled.div`
  flex: 1;
`;

const Item = styled.div`
  flex: 1;
`;

export default TrendListRow;
