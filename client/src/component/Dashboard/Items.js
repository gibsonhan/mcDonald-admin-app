import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import List from '../common/List';

const Items = ({ props }) => {
  const [itemsList, setItemList] = useState([]);

  useEffect(() => {
    async function fetchItemsList() {
      const baseUrl = 'http://localhost:3001/api/item';
      const response = await axios.get(baseUrl);
      setItemList(response.data);
    }

    fetchItemsList();
  }, []);

  return (
    <ItemsContainer>
      <ItemSummaryContainer>
        <header>Items</header>
        <button>Add new item</button>
        <section>
          <input></input>
          <button>Jump To</button>
        </section>
        Number of items: {itemsList.length}
      </ItemSummaryContainer>
      <ItemListContainer>
        <List title={'Items'} data={itemsList} />
      </ItemListContainer>
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ItemSummaryContainer = styled.div`
  flex: 2;
`;
const ItemListContainer = styled.div`
  flex: 6;
`;

export default Items;

//** Building custom platoform for day trading*/
// Asking good quesionts
// Training to have good discipline.
// Sticking to rish mangment principles.
// Jesus fuck i am scared. that guy turns on the musi c when ge tget annoys.
// this guy is pretty annoyng.
// gotta put extra attention on my  wrist. "the amount of pressure i applu to m keyboard requreis "
// this guys is crazy. man this wills streangth  my keys allot

// this forces me to be more in contorl of the code.
// this is fucking stupid.

//Plan the strokes of the code. Stop Chicken Scratching.
//

/// Implemenation of S3
/*  1 [] test out the input of the sizeObjec info.
    2 [] Read the article. And try to sumarize it. Its about getting the high level idea first, then implementing from their logic frame
     -      - to really challenge myself to think and form solid and educated options.
            -
    - we in the daneer zone.
*/

//Specs i want
//Draw distance bottom out?
// 20 grams?
//
