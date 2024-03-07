import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your credentials to log in
        </p>
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
          className="w-full border rounded-md p-2"
          required
        />
      </div>
      <button
        className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="submit"
      >
        Login
      </button>
      <div className="flex justify-between items-center">
        <label className="block text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            className="underline text-indigo-500 hover:text-indigo-700"
            to="/reg"
          >
            Register
          </Link>
        </label>
        <Link
          className="text-sm text-indigo-500 hover:text-indigo-700"
          to="/fpwd"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};
export default Login;
