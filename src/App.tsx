import React, { useState, useCallback } from "react";
import Counter from "./exe4";

const App: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementGlobal = useCallback(() => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }, [count1, count2]);

  return (
    <div>
      <h1>Compteurs</h1>
      <Counter initialValue={count1} onIncrementGlobal={incrementGlobal} />
      <Counter initialValue={count2} onIncrementGlobal={incrementGlobal} />
    </div>
  );
};

export default App;