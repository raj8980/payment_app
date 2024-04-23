import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="bg-gray-50 h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="p-2 px-4 rounded-lg bg-white sm:mx-auto  sm:w-full sm:max-w-sm lg:max-w-lg">
        <div className="mx-auto mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center h-10 w-auto">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/signin"
          >
            signin
          </Link>
        </div>
        <div className="mx-auto mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center h-10 w-auto">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/signup"
          >
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
