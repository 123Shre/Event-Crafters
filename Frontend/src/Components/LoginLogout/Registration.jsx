import { Link } from "react-router-dom";

const Component = () => {
  return (
    <div className="mx-auto max-w-sm space-y-6 shadow-2xl rounded-lg p-8 relative top-8">
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
          name="full-name"
          type="text"
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
          className="w-full border rounded-md p-2"
          placeholder="m@example.com"
          required
        />
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
          name="confirm-password"
          type="password"
          className="w-full border rounded-md p-2"
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            required
          />
          <label
            htmlFor="terms"
            className="ml-2 block text-sm text-gray-900 dark:text-gray-500"
          >
            I agree to the{" "}
            <Link
              href="#"
              className="underline text-indigo-500 hover:text-indigo-700"
            >
              terms and conditions
            </Link>
          </label>
        </div>
      </div>
      <button
        className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="submit"
      >
        Register
      </button>
      <label className="ml-20">Already have an account? </label>
      <Link
        className="underline text-indigo-500 hover:text-indigo-700"
        to="/login"
      >
        {" "}
        Log in
      </Link>
    </div>
  );
};
export default Component;
