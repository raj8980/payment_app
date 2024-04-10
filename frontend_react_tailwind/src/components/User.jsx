import { useNavigate } from "react-router-dom";

export function User({ user }) {
    const navigate=useNavigate();
  return (
    <li key={user.userName} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {user.firstName}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {user.userName}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <button onClick={(e) =>{
                navigate("/send?id="+user._id+"&name="+user.firstName)
            }} className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Send Money 
            <span aria-hidden="true">&rarr;</span></button>
        </div>
    </li>
  );
}
