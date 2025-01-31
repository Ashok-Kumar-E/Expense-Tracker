import React from "react";
import { FaTrash } from "react-icons/fa";

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  return (
    <div className="expense-item">
      <p>{expense.description}</p>
      <p>${expense.amount.toFixed(2)}</p>
      <p>{expense.category}</p>
      <button className="delete-btn" onClick={() => onDeleteExpense(expense.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default ExpenseItem;
