import { useEffect } from 'react';
import { getList } from './service';
import { useAppContext } from '../global/context';

export default (type) => {
  const { dispatchSetList, state } = useAppContext();

  async function fetchAndSet(type) {
    const response = await getList(type);
    dispatchSetList(type, response);
  }

  useEffect(() => {
    if (state[type].length > 0) {
      console.log(`state ${type} exist, no need to fetch`);
      return;
    }
    fetchAndSet(type);
  }, []);
};
