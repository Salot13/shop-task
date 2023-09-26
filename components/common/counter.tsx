import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../contexts/actions/counterActions';

function Counter() {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
