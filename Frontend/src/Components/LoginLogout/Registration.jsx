import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const SuccessAlert = () => {
  return (
    <>
      <div
        className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:text-green-400"
        role="alert"
      >
        <span className="font-medium"> Registration Successful.</span>
      </div>
    </>
  );
};
const UserErrorAlert = () => {
  return (
    <>
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium"> User Already Exist</span>
      </div>
    </>
  );
};
const ErrorAlert = () => {
  return (
    <>
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium"> Registration Unsuccessfull</span>
      </div>
    </>
  );
};

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [usererrorAlert, setUserErrorAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};

    // Check if name is empty
    if (!formData.name) {
      errors.name = "Name is required";
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (!formData.password || formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    // Check if confirm password is empty
    if (!formData.cpassword) {
      errors.cpassword = "Confirm password is required";
    }

    // Check if password and confirm password match
    if (formData.password !== formData.cpassword) {
      errors.passwordMatch = "Passwords do not match";
    }

    // If there are errors, log them and return
    if (Object.keys(errors).length > 0) {
      console.log("Form validation errors:", errors);
      return;
    }

    try {
      // console.log(
      //   formData.name,
      //   formData.email,
      //   formData.password,
      //   formData.cpassword
      // );
      const response = await axios.post(
        "http://localhost:3000/loginreg/register",
        formData
      );
      setFormData({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });
      const data = response.data;
      // console.log(data);
      if (data.status === 201) {
        setShowAlert(true);
        // console.log("Registration Successful", data);
        navigate("/login");
      }
    } catch (error) {
      if (error.response.message === "User with this email already exists") {
        setUserErrorAlert(true);
      } else {
        console.log("Registration Failed", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      {usererrorAlert && <UserErrorAlert />}
      {errorAlert && <ErrorAlert />}
      {showAlert && <SuccessAlert />}
      <div className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Registration</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your information to create an account
            </p>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-500"
            >
              Full name
            </label>
            <input
              id="full-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              placeholder="Lee Robinson"
              required
            />
          </div>
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
            {formData.email &&
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                <span className="text-red-500">Invalid email address</span>
              )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium  text-gray-500"
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
          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-500"
            >
              Confirm password
            </label>
            <input
              id="confirm-password"
              name="cpassword"
              type="password"
              value={formData.cpassword}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
              required
            />
            {formData.password !== formData.cpassword && formData.cpassword && (
              <span className="text-red-500">Passwords do not match</span>
            )}
          </div>
          <button
            className="w-full mt-2 px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Register
          </button>
        </form>
        <label className="ml-20">Already have an account? </label>
        <Link
          className="underline text-indigo-500 hover:text-indigo-700"
          to="/login"
        >
          {" "}
          Log in
        </Link>
      </div>
    </>
  );
};

export default Registration;
