import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const USER = "admin";
    const PASS = "1234";

    if (form.username === USER && form.password === PASS) {
      login();
      navigate("/dashboard");
    } else {
      alert("Wrong username or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80 space-y-3"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <input
          className="w-full p-2 border rounded"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          className="w-full p-2 border rounded"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Login
        </button>
        <p className="text-sm text-center text-gray-500">
          Try: <b>admin / 1234</b>
        </p>
      </form>
    </div>
  );
}
