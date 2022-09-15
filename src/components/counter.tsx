import React, {useState} from 'react';
import './counter.scss'

const Counter = () => {
  const [counter, setCounter] = useState(3333);
  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>НАЖМИ</button>
    </div>
  );
};

export default Counter;