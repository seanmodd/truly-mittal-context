import { useState, createContext } from 'react';

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increaseCount = (params) => {
    setCount(count + 1);
  };
  const decreaseCount = (params) => {
    console.log('increase count pushed');
    setCount(count - 1);
  };
  return (
    <>
      <CounterContext.Provider value={{ count, increaseCount, decreaseCount }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default CounterContextProvider;
