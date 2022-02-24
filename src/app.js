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
console.log('testing');
const jsx = (
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <AppRouter />
    </LocalizationProvider>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
