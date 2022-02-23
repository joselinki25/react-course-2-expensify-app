import { 
  setStartDate, 
  setEndDate, 
  setTextFilter, 
  sortByDate, 
  sortByAmount 
} from '../../actions/filters';
import { DateTime, Duration } from 'luxon'

test('should generate set start date action object', () => {
  const action = setStartDate(DateTime.fromMillis(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: DateTime.fromMillis(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(DateTime.fromMillis(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: DateTime.fromMillis(0)
  });
});

test('should generate set text filter object with text value', () => {
  const action = setTextFilter('word');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'word'
  });
});

test('should generate set text filter object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sort by date object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('should generate sort by amount object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})
