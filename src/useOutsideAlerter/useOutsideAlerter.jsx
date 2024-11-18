import { useEffect, useRef } from 'react';

const useOutsideAlerter = onClose => {
  const componentRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return componentRef;
};

export default useOutsideAlerter;
