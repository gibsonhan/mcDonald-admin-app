import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MenuListRow = ({ index, data }) => {
  async function removeItem(id) {
    //TODO: pop up modul Confirm do you want to delete
    //TODO: move the data stuff to app Context
    try {
      const baseUrl = `http://localhost:3001/api/item/delete/${id}`;
      const response = await axios.delete(baseUrl);
      console.log('resposne', response);
    } catch (error) {
      console.log('this is a weird error', error);
    }
  }

  const { name, group, subGroup, id } = data[index];
  console.log(data);
  return (
    <RowContainer>
      <div>Name</div>
      <div>Sub Menu</div>
      <div>Items</div>
      <button>Edit</button>
      <button onClick={() => removeItem(id)}>Delete</button>
    </RowContainer>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export default MenuListRow;
