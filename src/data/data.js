export const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("2020, 7, 14"),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date("2021, 2, 28"),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date("2021, 5, 12"),
  },
];

export const yearMin = (expenses) => {
  return Math.min(
    ...expenses.map((expense) => new Date(expense.date).getFullYear())
  );
};

export const yearMax = (expenses) => {
  return Math.max(
    ...expenses.map((expense) => new Date(expense.date).getFullYear())
  );
};

export const range = (low, high, step) => {
  let matrix = [];
  let inival, endval, plus;
  let walker = step || 1;
  let chars = false;

  if (!isNaN(low) && !isNaN(high)) {
    inival = low;
    endval = high;
  } else if (isNaN(low) && isNaN(high)) {
    chars = true;
    inival = low.charCodeAt(0);
    endval = high.charCodeAt(0);
  } else {
    inival = isNaN(low) ? 0 : low;
    endval = isNaN(high) ? 0 : high;
  }

  plus = inival > endval ? false : true;
  if (plus) {
    while (inival <= endval) {
      matrix.push(chars ? String.fromCharCode(inival) : inival);
      inival += walker;
    }
  } else {
    while (inival >= endval) {
      matrix.push(chars ? String.fromCharCode(inival) : inival);
      inival -= walker;
    }
  }

  return matrix;
};
