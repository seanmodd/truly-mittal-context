import { useState } from 'react';

const MyCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>MyCounter is this</h3>
      <p>Count is: {count}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          style={{
            margin: '15px',
          }}
        >
          Increase Count
        </button>
        <button
          style={{
            margin: '15px',
          }}
        >
          Decrease Count
        </button>
      </div>
    </div>
  );
};

export default MyCounter;
