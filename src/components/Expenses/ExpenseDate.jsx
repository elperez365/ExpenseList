import "./ExpenseDate.css";
export default function ExpenseDate({ date }) {
  return (
    <div className="expense-date">
      <div className="expense-date__day">
        {date.toLocaleString("it-IT", { day: "2-digit" })}
      </div>
      <div className="expense-date__month">
        {date.toLocaleString("it-IT", { month: "long" })}
      </div>
      <div className="expense-date__year">{date.getFullYear()}</div>
    </div>
  );
}
