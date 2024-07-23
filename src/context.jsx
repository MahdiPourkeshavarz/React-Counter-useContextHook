/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((prevValue) => prevValue + 1);
  }

  function subCount() {
    setCount((prevValue) => prevValue - 1);
  }

  return (
    <CounterContext.Provider value={{ count, addCount, subCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    console.log("useCounterContext must be used within a CounterProvider");
  }

  return context;
};
