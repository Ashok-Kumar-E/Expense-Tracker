import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
