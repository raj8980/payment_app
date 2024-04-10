import { useEffect, useState } from "react";
import { User } from "./User";
import axios from "axios";
import { Input } from "./Input";

export function Users() {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:3000/api/v1/user/bulk?filter="+filter,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setUsers(result.data.user);
    }
    fetchData();
  }, [filter]);

  return (
        <>
        <Input onChange={(e)=>{setFilter(e.target.value);}} placeholder="Search by first name or last name" label=""/>
        <ul role="list" className="divide-y divide-gray-100">
          {users.map((user,i) => <User key={i} user={user}/>)}
        </ul>
        </>
  );
}
