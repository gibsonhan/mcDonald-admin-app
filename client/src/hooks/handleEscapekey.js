import { useEffect } from 'react';

export default (callback) => {
  function escape(e) {
    if (e.key === 'Escape') {
      callback();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
};
