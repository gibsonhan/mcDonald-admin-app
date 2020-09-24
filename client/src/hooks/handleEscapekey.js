import { useEffect } from 'react';
import { useAppContext } from '../global/context';

export default () => {
  const { history, oneModalOpen } = useAppContext();

  useEffect(() => {
    console.log('what is the state of one modal', oneModalOpen);
  }, [oneModalOpen]);

  function escape(e) {
    console.log('one modal open', oneModalOpen);
    if (e.key === 'Escape' && !oneModalOpen) {
      console.log('firing esacepe key', oneModalOpen);
      history.goBack();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
};
