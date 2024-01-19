import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import { range, yearMin } from "../../data/data";
import ExpenseList from "./ExpenseList";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = range(yearMin(expenses), new Date().getFullYear())
    .filter((year) => year !== Number(filteredYear))
    .join(", ");

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getFullYear() === Number(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChange={(e) => setFilteredYear(e.target.value)}
        value={filteredYear}
      />

      <ExpenseList
        filteredExpenses={filteredExpenses}
        filterInfoText={filterInfoText}
      />
    </Card>
  );
}
