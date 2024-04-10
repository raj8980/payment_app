import { Headers } from "../components/Headers";
import { UserBalance } from "../components/UserBalance";
import { Users } from "../components/Users";

export function Dashboard() {
    
  return (
    <div className="bg-neutral-400 h-screen min-h-full">
      <Headers></Headers>
      <div className="grid grid-flow-row ">
       
        <div className="min-h-full lg:px-8 px-6 py-5 bg-white sm:mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <UserBalance/>
                <div className="divide-y divide-gray-100 gap-x-6">
                    <Users/>
                </div>
        </div>
      </div>
    </div>
  );
}
