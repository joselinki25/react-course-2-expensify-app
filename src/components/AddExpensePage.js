import React from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


export const AddExpensePage = (props) => {
  const navigate = useNavigate();

  const onSubmit = (expense) => {
    props.addExpense(expense);
    navigate('/');
  };

  return (
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={onSubmit} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);