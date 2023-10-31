import React from "react";

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  return (
    <p>Compteur : {value}</p>
  );
};

export default Counter;