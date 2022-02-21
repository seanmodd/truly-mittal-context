import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

const MyCounter = () => {
  const myCount = useContext(CounterContext);
  console.log('This is myCount: ', myCount);
  return (
    <div>
      <h3>MyCounter is this</h3>
      <p>Count is: {myCount.count}</p>

      <button onClick={myCount.increaseCount}>Increase Count</button>
      <button onClick={myCount.decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default MyCounter;
