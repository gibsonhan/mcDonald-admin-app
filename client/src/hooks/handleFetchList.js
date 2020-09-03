import { useState, useEffect } from 'react';
import { getList } from '../util/service';
import { useAppContext } from '../global/context';
import { SET } from '../global/reserveWord';

export default (type) => {
  const [list, setList] = useState([]);
  const { dispatch } = useAppContext();

  async function fetchAndSet(type, setState) {
    const response = await getList(type);
    dispatch({
      type: SET,
      payload: {
        data: response,
        type: type,
      },
    });
    setState((prev) => response);
  }

  useEffect(() => {
    fetchAndSet(type, setList);
  }, []);

  return list;
};
