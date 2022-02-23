import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from '@mui/lab';
import { DateTime } from 'luxon'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'the text change'
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should sortByDate', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value: 'date' }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sortByAmount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' }
  });
  expect(sortByAmount).toHaveBeenCalledTimes(1);
});

test('should handle date changes', () => {
  const dates = [DateTime.fromMillis(0).plus({ years: 4 }), DateTime.fromMillis(0).plus({years: 5})]
  wrapper.find(DateRangePicker).simulate('change', dates);
  expect(setStartDate).toHaveBeenLastCalledWith(dates[0]);
  expect(setEndDate).toHaveBeenLastCalledWith(dates[1]);
})