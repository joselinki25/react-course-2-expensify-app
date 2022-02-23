import { DateTime } from 'luxon';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: DateTime.fromMillis(0).startOf('month'),
  endDate: DateTime.fromMillis(0).endOf('month')
};

const altFilters = {
  text: 'bills',
  sortBy: 'amount',
  startDate: DateTime.fromMillis(0),
  endDate: DateTime.fromMillis(0).plus({ days: 3 })
};

export { filters, altFilters }
