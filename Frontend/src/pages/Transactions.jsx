import React, { useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ type: "Sale", product: "", qty: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, form]);
    setForm({ type: "Sale", product: "", qty: 0 });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">💰 Transactions</h1>

      {/* Add Transaction */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-6 space-y-3"
      >
        <select
          className="border p-2 w-full rounded"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option>Sale</option>
          <option>Purchase</option>
        </select>
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full rounded"
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border p-2 w-full rounded"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          ➕ Record Transaction
        </button>
      </form>

      {/* Transactions List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">All Transactions</h2>
        {transactions.length > 0 ? (
          <ul className="space-y-2">
            {transactions.map((t, idx) => (
              <li
                key={idx}
                className="flex justify-between p-3 border rounded"
              >
                <span>
                  {t.type} - {t.product} (Qty: {t.qty})
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions yet</p>
        )}
      </div>
    </div>
  );
}

export default Transactions;
