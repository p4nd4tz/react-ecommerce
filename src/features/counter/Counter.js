import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  selectCount,
} from './counterSlice';

export default function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
    </div>
  );
}
