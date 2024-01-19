import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ onSaveExpenseData }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="new-expense">
      {!isOpened ? (
        <div className="new-expense__actions" style={{ textAlign: "center" }}>
          <button onClick={() => setIsOpened(true)}>Add New Expense</button>
        </div>
      ) : (
        <ExpenseForm
          onSaveExpenseData={(enteredExpenseData) =>
            onSaveExpenseData({
              ...enteredExpenseData,
              id: Math.random().toString(),
            })
          }
          onCancel={() => setIsOpened(false)}
        />
      )}
    </div>
  );
}
