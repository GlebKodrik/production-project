import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TCounterProps } from './types';
import { counterActions, getCount } from '../../redux-stores/redux-stores/counter';

const Counter: React.FC<TCounterProps> = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  const onIncrementClick = () => {
    dispatch(counterActions.increment());
  };

  const onDecrementClick = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <button data-testid="increment-btn" onClick={onIncrementClick}>+</button>
      <div data-testid="count">
        { count }
      </div>
      <button data-testid="decrement-btn" onClick={onDecrementClick}>-</button>
    </div>
  );
};

export default Counter;
