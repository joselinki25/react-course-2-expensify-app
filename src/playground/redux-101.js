import { createStore } from 'redux';

// Action generators - functions that return action objects

const c = 15
const subtract = (b) => {
  return c - d
}

const add = (a, b) => {
  return a + b
}

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy,
})

const resetCount = () => ({
  type: 'RESET',
})

const setCount = ({ count = store.getState().count} = {}) => ({
  type: 'SET',
  count,
})

// Reducers
// 1. Reducers are pure functions


const countReducer = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT' : 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default: 
      return state;
  }  
});

const store = createStore(countReducer);

const unsusbscribe = store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount());

store.dispatch(setCount({ count: 101 }));

// store.dispatch({
//   type: 'SET',
//   count: 101
// })
