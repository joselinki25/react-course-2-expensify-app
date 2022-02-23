import { DateTime } from 'luxon';
import filtersReducer from '../../reducers/filters';

test ('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: DateTime.now().startOf('month'),
    endDate: DateTime.now().endOf('month'),
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: DateTime.now().startOf('month'),
    endDate: DateTime.now().endOf('month'),
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'This is my text filter'
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text,
  });
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = DateTime.local(2019, 3)
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate,
  });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = DateTime.local(2021, 5)
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate,
  });
  expect(state.endDate).toEqual(endDate);
});