import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Forgot Password</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email to reset your password
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
      <button
        className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="submit"
      >
        Reset Password
      </button>
      <div className="flex justify-between items-center">
        <Link
          className="text-sm text-indigo-500 hover:text-indigo-700"
          to="/login"
        >
          Back to Login
        </Link>
        <Link
          className="text-sm text-indigo-500 hover:text-indigo-700"
          to="/reg"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
export default ForgotPassword;
