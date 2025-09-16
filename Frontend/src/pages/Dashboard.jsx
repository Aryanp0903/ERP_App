import React, { useEffect, useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const lowStock = products.filter((p) => p.stock <= 5);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Dashboard</h1>

      {/* Total Products */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Total Products: {products.length}
        </h2>
      </div>

      {/* Low Stock Alerts */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3 text-red-600">
          ⚠️ Low Stock Alerts
        </h2>
        {lowStock.length > 0 ? (
          <ul className="list-disc ml-6 text-gray-700">
            {lowStock.map((item) => (
              <li key={item._id}>
                {item.name} (Stock: {item.stock})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No low stock items</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
