import { useState } from "react";
import { Input } from "../components/Input";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { Button } from "../components/Button";

export function SignIn(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    return <div className="bg-gray-50 h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="p-2 px-4 rounded-lg bg-white sm:mx-auto  sm:w-full sm:max-w-sm lg:max-w-lg">
                    <div className="mx-auto mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center h-10 w-auto">Payment App</div>
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In to Your Account</h2>
                    <div className="mt-10 space-y-6">
                        <Input onChange={(e)=>{setUserName(e.target.value);}} placeholder="raj@gmail.com" label="Email Address:"/>
                        <Input onChange={(e)=>{setPassword(e.target.value);}} placeholder="Password" label="Password:"/>
                        <Button onClick={async () =>{
                            const response= await axios.post("http://localhost:3000/api/v1/user/signin",{
                                userName,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate('/dashboard');
                        }} label="Sign In"/>
                    </div>
                    <p className=" mt-10 text-center text-sm text-gray-500">
                        Don't have an account?
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 px-2">Sign Up</Link>
                    </p>
                </div>
            </div>;
}