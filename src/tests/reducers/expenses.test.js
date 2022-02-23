import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { DateTime } from 'luxon'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Taxes',
    note: '',
    amount: 15000,
    createdAt: DateTime.now(),
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Gummy Bear',
    amount: 455,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([{...expenses[0], ...updates}, expenses[1], expenses[2]]);
});

test('should not edit an expense if expense not found', () => {
  const updates = {
    description: 'Gummy Bear',
    amount: 455,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-2',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});