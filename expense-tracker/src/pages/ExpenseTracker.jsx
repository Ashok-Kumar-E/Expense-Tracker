import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalExpense from "../components/TotalExpense";
import ExpenseChart from "../components/ExpenseChart";
import ThemeToggle from "../components/ThemeToggle";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
    calculateTotal(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    calculateTotal(expenses);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const calculateTotal = (expensesList) => {
    setTotal(expensesList.reduce((acc, expense) => acc + expense.amount, 0));
  };

  const filteredExpenses =
    filter === "All" ? expenses : expenses.filter((e) => e.category === filter);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ThemeToggle />
      <ExpenseForm onAddExpense={addExpense} />
      <select className="filter-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <TotalExpense total={total} />
      <ExpenseList expenses={filteredExpenses} onDeleteExpense={deleteExpense} />
      <ExpenseChart expenses={expenses} />
    </div>
  );
};

export default ExpenseTracker;
