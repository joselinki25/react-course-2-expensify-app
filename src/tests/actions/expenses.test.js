import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { DateTime } from 'luxon';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'new note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: DateTime.local(2017, 3, 12),
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String) 
    }
  })
});

test('should setup add expense action object with default values', () => {
  const expenseDefaultData = {
    description: '',
    amount: 0,
    createdAt: DateTime.now(),
    note: '',
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDefaultData,
      id: expect.any(String)
    }
  })
});