import { useEffect } from 'react';
import { useAppContext } from '../global/context';

export default () => {
  const { history } = useAppContext();

  function escape(e) {
    if (e.key === 'Escape') {
      history.goBack();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
};
