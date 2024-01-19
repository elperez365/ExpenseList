import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ filteredExpenses, filterInfoText }) => {
  return (
    <>
      {filteredExpenses.length === 0 ? (
        <h2 className="expense-list__fallback ">No expenses found</h2>
      ) : (
        <>
          <p>{filterInfoText} are hidden</p>
          <ul className="expenses-list">
            {filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ExpenseList;
