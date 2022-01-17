import React from 'react'

const CountButton = React.memo(({ onClick, count }) => {
  console.log("render", count);
  return <button onClick={onClick}>{count}</button>;
});

export default CountButton
