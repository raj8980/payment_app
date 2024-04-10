import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
export function TransferMoney(){
    const [searchParams]= useSearchParams();
    const id =searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,setAmount] = useState();
    const navigate =useNavigate();

    return(
        <div className="bg-gray-50 h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="p-2 px-4 rounded-lg bg-white sm:mx-auto  sm:w-full sm:max-w-sm lg:max-w-lg">
                    <div className="mx-auto mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center h-10 w-auto">Send Money</div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                               To : {name}
                            </p>
                        </div>
                    <div className="mt-2 space-y-6">
                        <Input onChange={(e)=>{setAmount(e.target.value);}} placeholder="5000" label="Amount :"/>
                        <Button onClick={async () =>{
                            const response= await axios.post("http://localhost:3000/api/v1/account/transfer", 
                            {
                                "to" : id,
                                "amount" : amount
                            },{
                                headers: {
                                  Authorization: "Bearer " + localStorage.getItem("token"),
                                }
                              });
                            
                            navigate('/dashboard');
                        }} label="Send Money"/>
                    </div>
                </div>
            </div>
    )
}