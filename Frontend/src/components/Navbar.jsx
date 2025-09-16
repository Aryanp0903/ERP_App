import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-60 bg-blue-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">Mini ERP</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-yellow-300">📊 Dashboard</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-yellow-300">📦 Products</Link>
        </li>
        <li>
          <Link to="/suppliers" className="hover:text-yellow-300">🏭 Suppliers</Link>
        </li>
        <li>
          <Link to="/transactions" className="hover:text-yellow-300">💰 Transactions</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
