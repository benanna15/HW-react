import React, { useState } from 'react';

export default function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  const ExpensiveComputation = () => {
    console.log('Running expensive computation...');
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += i;
    }
    return result + count; 
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Other value: {otherValue}</p>
      <p>Result: {ExpensiveComputation()}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment count</button>
      <button onClick={() => setOtherValue(v => v + 1)}>Increment other value</button>
    </div>
  );
}
