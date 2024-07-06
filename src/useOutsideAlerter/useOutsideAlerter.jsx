import { useEffect, useRef } from 'react';

const useOutsideAlerter = onClose => {
  const componentRef = useRef(null);
  useEffect(() => {
    // const handleClickOutside = event => {
    //   if (
    //     componentRef.current &&
    //     !componentRef.current.contains(event.target)
    //   ) {
    //     console.log('You clicked outside of me!');
    //     onClose();
    //   }
    // };

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
