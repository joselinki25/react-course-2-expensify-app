import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/lab';
import AdapterLuxon from '@mui/lab/AdapterLuxon';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import { DateTime, Duration } from 'luxon';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
// store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
// store.dispatch(addExpense({description: 'Rent', amount: 109500}));
// store.dispatch(sortByAmount());
// store.dispatch(setTextFilter('water'));
// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <AppRouter />
    </LocalizationProvider>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
