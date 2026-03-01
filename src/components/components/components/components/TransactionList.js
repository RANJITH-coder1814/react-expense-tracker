import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.text} - ₹{transaction.amount}
            <button onClick={() => deleteTransaction(transaction.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
