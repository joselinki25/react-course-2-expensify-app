import React from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

export const EditExpensePage = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const selectedExpense = props.expenses.find((expense) => expense.id === id);

  const onSubmit = (expense) => {
    props.editExpense(id, expense);
    navigate('/');
  }

  const handleRemoveExpense = () => {
    props.removeExpense(id);
    navigate('/');
  }

  return (
    <div>
      This is from my edit expense componente {id}!
      <ExpenseForm expense={selectedExpense} onSubmit={onSubmit} />
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  }
}

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense({ id })),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);