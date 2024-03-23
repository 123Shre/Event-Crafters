import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData.email, formData.password);
      const response = await axios.post(
        "http://localhost:3000/loginreg/login",
        formData
      );
      const data = response.data;
      const accessToken = data.accessToken;
      console.log(data);
      if (data.status === "ok") {
        localStorage.setItem("accessToken", accessToken);
        console.log(localStorage.getItem("accessToken"));
        console.log("Login Successful", data);
        navigate("/dash");
      }
    } catch (error) {
      console.log("Login Failed", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your credentials to log in
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <button
            className="w-full mt-2 px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center">
          <label className="block text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              className="underline text-indigo-500 hover:text-indigo-700"
              to="/register"
            >
              Register
            </Link>
          </label>
        </div>
      </div>
    </>
  );
};
export default Login;
