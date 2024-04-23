import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export function UserBalance() {
  const [balance, setBalance] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://paymentbe.rajpatel.com.au/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setBalance(result.data.balance);
    }
    fetchData();
  }, []);
  return (
    <ul role="list" className="divide-x divide-gray-100 grid grid-cols-3">
      <li className="grid justify-between gap-y-10 px-5">
        <div className="grid min-w-0 gap-y-10">
          <div className="min-w-0 grid-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Balance
            </p>
            <p className="mt-1 text-pretty text-xs leading-5 text-gray-500">
              {balance}
            </p>
          </div>
        </div>
      </li>
      <li className="grid justify-between gap-y-10 px-5">
        <div className="grid min-w-0 gap-y-10">
          <div className="min-w-0 text-pretty grid-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Upcoming Bills
            </p>
            <p className="mt-1 text-pretty text-xs leading-5 text-gray-500">
              10,000
            </p>
          </div>
        </div>
      </li>
      <li className="grid justify-between gap-y-10 px-5">
        <div className="grid min-w-0 gap-y-10">
          <div className="min-w-0 grid-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Transactions
            </p>
            <p className="mt-1 text-pretty text-xs leading-5 text-gray-500">
              10,000
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}

export async function getUserBalance() {}
