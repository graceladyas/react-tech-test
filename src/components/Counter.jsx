import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1)); 

  return (
    <div className="counter">
      <div className="counter__display" aria-live="polite">{count}</div>
      <div className="counter__actions">
        <button onClick={decrement} aria-label="Decrement">Decrement -</button>
        <button onClick={increment} aria-label="Increment">Increment +</button>
      </div>
    </div>
  );
}
