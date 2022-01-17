import React, { useLayoutEffect, useState } from 'react'

const LayOutEffect = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("render", value);

  return <button onClick={() => setValue(0)}>value: {value}</button>;
}

export default LayOutEffect
