import { useState, useEffect } from 'react';
import { getList } from '../util/service';

export default (type) => {
  const [list, setList] = useState([]);

  async function fetchAndSet(type, setState) {
    const response = await getList(type);
    setState((prev) => response);
  }

  useEffect(() => {
    fetchAndSet(type, setList);
  }, []);

  return list;
};
