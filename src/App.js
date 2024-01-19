import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_EXPENSES } from "./data/data";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  return (
    <>
      <NewExpense
        onSaveExpenseData={(enteredExpenseData) =>
          setExpenses((prevExpenses) => {
            // DUMMY_EXPENSES.push(enteredExpenseData);
            return [enteredExpenseData, ...prevExpenses];
          })
        }
      />
      <Expenses expenses={expenses} />;
    </>
  );
}

export default App;
