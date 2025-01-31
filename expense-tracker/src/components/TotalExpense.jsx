import React from "react";

const TotalExpense = ({ total }) => {
  return <h2 className="total-expense">Total: ${total.toFixed(2)}</h2>;
};

export default TotalExpense;
