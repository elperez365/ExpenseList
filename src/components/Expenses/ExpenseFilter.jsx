import { DUMMY_EXPENSES, yearMin } from "../../data/data";
import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  const years = () => {
    const years = [];
    for (let i = yearMin(DUMMY_EXPENSES); i <= new Date().getFullYear(); i++) {
      years.push(i);
    }
    return years;
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter by year</label>
        <select name="filter" id="filter" {...props}>
          {years().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
