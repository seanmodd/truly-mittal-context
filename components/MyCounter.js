import { useState } from 'react';

const MyCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>MyCounter is this</h3>
      <p>Count is: {count}</p>

      <button style={{ margin: '15px' }}>Increase Count</button>
      <button style={{ margin: '15px' }}>Decrease Count</button>
    </div>
  );
};

export default MyCounter;
