import { useState } from 'react';

const MyCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = (params) => {
    setCount(count + 1);
  };
  const decreaseCount = (params) => {
    console.log('increase count pushed');
    setCount(count - 1);
  };
  return (
    <div>
      <h3>MyCounter is this</h3>
      <p>Count is: {count}</p>

      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default MyCounter;
