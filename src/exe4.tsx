import React, { useState } from "react";

interface CounterProps {
  initialValue: number;
  onIncrementGlobal: (value:number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialValue, onIncrementGlobal }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementGlobal = () => {
    onIncrementGlobal();
  };

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementGlobal}>Ajouter aux deux compteurs</button>
    </div>
  );
};

export default Counter;