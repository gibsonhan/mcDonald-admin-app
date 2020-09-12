import { useEffect, useState } from 'react';
import { getSingle } from '../util/service';
import { isEmpty } from '../util/handleIsEmpty';

export default (type, id) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchSingleItem() {
      const fetch = await getSingle(type, id);
      setData((prev) => fetch);
    }
    fetchSingleItem();
  }, []);

  return isEmpty(data)
    ? false
    : setTimeout(() => {
        console.log('returning data', data);
        return data;
      }, 5000);
};
