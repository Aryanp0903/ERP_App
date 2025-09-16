import React, { useState } from "react";

function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [form, setForm] = useState({ name: "", contact: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuppliers([...suppliers, form]);
    setForm({ name: "", contact: "" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🏭 Suppliers</h1>

      {/* Add Supplier */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-6 space-y-3"
      >
        <input
          type="text"
          placeholder="Supplier Name"
          className="border p-2 w-full rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Info"
          className="border p-2 w-full rounded"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          ➕ Add Supplier
        </button>
      </form>

      {/* Supplier List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">All Suppliers</h2>
        {suppliers.length > 0 ? (
          <ul className="space-y-2">
            {suppliers.map((s, idx) => (
              <li
                key={idx}
                className="flex justify-between p-3 border rounded"
              >
                <span>{s.name} ({s.contact})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No suppliers yet</p>
        )}
      </div>
    </div>
  );
}

export default Suppliers;
