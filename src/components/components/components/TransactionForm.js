import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount (negative for expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button>Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
