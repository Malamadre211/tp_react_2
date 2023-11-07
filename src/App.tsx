import { useCallback, useState } from 'react'
import CompteurExo5 from './exe5'

function App() {
  
  const [count, setCount] = useState(0)

  const handleIncrementCompteur = useCallback(
    () => { setCount(count + 1) },
    [count]
  );

  return (
    <>
<div className="exo5">
  <CompteurExo5 onIncrement={handleIncrementCompteur} onDecrement={handleIncrementCompteur} value={count}/>
  <CompteurExo5 onIncrement={handleIncrementCompteur} onDecrement={handleIncrementCompteur} value={count}/>
  <button onClick={handleIncrementCompteur}>+</button>
</div>
</>
  )
}

export default App;