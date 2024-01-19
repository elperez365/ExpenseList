import { useState } from "react";
import "./ExpenseForm.css";
import { DUMMY_EXPENSES, yearMin } from "../../data/data";

class Fields {
  title = "";
  amount = "";
  date = "";
}

export default function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [fields, setFields] = useState(new Fields());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: fields.title,
      amount: fields.amount,
      date: new Date(fields.date),
    };
    onSaveExpenseData(expenseData);
    setFields(new Fields());
    onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleChange}
            value={fields.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={fields.amount}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            id="date"
            min={yearMin(DUMMY_EXPENSES) + "-01-01"}
            max={new Date().toISOString().split("T")[0]}
            value={fields.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => onCancel()}>
          Cancel
        </button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
