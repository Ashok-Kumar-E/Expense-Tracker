import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [{ data: Object.values(categoryTotals), backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"] }],
  };

  return <Pie data={data} />;
};

export default ExpenseChart;
