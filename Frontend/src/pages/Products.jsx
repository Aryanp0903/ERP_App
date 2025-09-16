import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", stock: 0, price: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    window.location.reload();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📦 Products</h1>

      {/* Add Product Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-6 space-y-3"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ➕ Add Product
        </button>
      </form>

      {/* Product List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">All Products</h2>
        {products.length > 0 ? (
          <ul className="space-y-2">
            {products.map((p) => (
              <li
                key={p._id}
                className="flex justify-between p-3 border rounded"
              >
                <span>
                  {p.name} (Stock: {p.stock}, Price: ₹{p.price})
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products yet</p>
        )}
      </div>
    </div>
  );
}

export default Products;
