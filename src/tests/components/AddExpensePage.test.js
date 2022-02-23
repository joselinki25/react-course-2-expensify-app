import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  wrapper = shallow(<AddExpensePage addExpense={addExpense}/>)
})

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test ('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})