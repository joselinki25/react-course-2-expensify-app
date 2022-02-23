import React from 'react';
import ExpenseList from './ExpenseList';
import { ConnectedExpenseListFilter as ExpenseListFilters } from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;