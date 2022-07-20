import { useRef, useEffect } from 'react';

function usePreviousProp(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [ value ]);
  return ref.current;
}
export default usePreviousProp;
