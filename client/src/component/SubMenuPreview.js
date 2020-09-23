import React, { useEffect, useState } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import { isEmpty } from '../util/handleIsEmpty';

const SubMenuPreview = ({ list }) => {
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
    <ItemContainer>
      <Name>{name}</Name>
      {items.map((item) => (
        <div key={item.id} id={item.id}>
          {item.name}
        </div>
      ))}
    </ItemContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(15)};
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(10)};
`;
const Name = styled.div``;

export default SubMenuPreview;
