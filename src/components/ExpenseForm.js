import React from 'react';
import { TextField } from '@mui/material';
import { DateTime } from 'luxon';
import { DatePicker } from '@mui/lab';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? props.expense.createdAt : DateTime.now(),
      error: '',
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount.'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: Number(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt,
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Description" 
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus 
          />
          <input 
            type="text" 
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <DatePicker 
            label='Created At'
            inputFormat='dd/MM/yyyy'
            value={this.state.createdAt}
            onChange={this.onDateChange}
            renderInput={(props) => <TextField {...props} />}
            showDaysOutsideCurrentMonth={false}
            inputProps={{ readOnly: true }}
          />
          <textarea 
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}