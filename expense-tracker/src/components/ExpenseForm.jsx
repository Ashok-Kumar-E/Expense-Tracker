import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    const newExpense = { id: Date.now(), description, amount: parseFloat(amount), category };
    onAddExpense(newExpense);
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
