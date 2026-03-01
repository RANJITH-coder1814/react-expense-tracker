import React from "react";

function Balance({ transactions }) {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return <h2>Balance: ₹{total}</h2>;
}

export default Balance;
