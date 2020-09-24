import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { isEmpty } from '../util/handleIsEmpty';

import Modal from './common/Modal';
import Text from './common/Text';
import TransferList from './TransferList';

const SubMenuPreview = ({ list, editSubMenu }) => {
  const [subMenu, setSubMenu] = useState([]);

  useEffect(() => {
    if (!list) return;

    let arr = [];
    for (let key in list) {
      arr.push({ name: key, items: list[key] });
    }
    setSubMenu(arr);
  }, [list]);

  if (isEmpty(subMenu)) return <></>;
  return (
    <Container>
      {subMenu.map((menu) => (
        <SubMenu key={menu.name} name={menu.name} items={menu.items} />
      ))}
    </Container>
  );
};

const SubMenu = ({ name, items }) => {
  return (
    <SubMenuContainer>
      <Text size={24}>{name}</Text>
      {items.map((item) => (
        <div key={item.id} id={item.id}>
          {item.name}
        </div>
      ))}
    </SubMenuContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(15)};
`;

const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(10)};
  margin: ${rem(5)};
  border-radius: ${rem(5)};
  background-color: grey;
`;

export default SubMenuPreview;
