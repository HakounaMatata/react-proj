import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="w-48 h-screen bg-gray-800 text-white p-4 space-y-3">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <Link to="/dashboard" className="block hover:text-gray-300">
        Home
      </Link>
      <Link to="/dashboard/about" className="block hover:text-gray-300">
        About
      </Link>

      <button
        onClick={logout}
        className="bg-red-500 w-full py-1 rounded hover:bg-red-600 mt-4"
      >
        Logout
      </button>
    </div>
  );
}
