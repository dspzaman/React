import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index.js';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const showCounter = useSelector(state => state.counter.showCounter)
  
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const increasetHandler = () => {
    dispatch(counterActions.increase(15));
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{ counter }</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasetHandler}>Increase By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
