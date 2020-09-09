import { useEffect, useState } from 'react';
import { getSingle } from '../util/service';

export default (type, id) => {
  const [data, setData] = useState({});

  async function fetchSingleItem() {
    let fetch = await getSingle(type, id);
    setData(fetch);
  }
  useEffect(() => {
    fetchSingleItem();
  }, []);

  return { defaultValues: data };
};
