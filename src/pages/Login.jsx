import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username === "admin" && form.password === "1234") {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Wrong username or password");
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
