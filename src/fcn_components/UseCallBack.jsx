import React, { useCallback, useState } from 'react'
import CountButton from './CountButton';

export const UseCallBack = () => {
 const [count1, setCount1] = useState(0);
  const increment1 = useCallback(() => setCount1((c) => c + 1), []);

  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => setCount2((c) => c + 1), []);

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
