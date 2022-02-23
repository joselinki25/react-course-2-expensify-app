import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let expense, editExpense, removeExpense, wrapper;

beforeEach(() => {
  expense = expenses[2];
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(<EditExpensePage expenses={expenses} editExpense={editExpense} removeExpense={removeExpense}/>)
})

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(editExpense).toHaveBeenLastCalledWith(expenses.id, expense);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith(expenses.id);
});