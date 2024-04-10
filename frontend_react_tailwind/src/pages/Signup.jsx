import { useState } from "react";
import { Input } from "../components/Input";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Button } from "../components/Button";

export const SignUp =() =>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    return <div className="bg-gray-50 h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className=" p-2 px-4 rounded-lg bg-white sm:mx-auto  sm:w-full sm:max-w-sm">
            
                    <div className="mx-automt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center h-10 w-auto">Payment App</div>
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In to Your Account</h2>
       
                    <div className="mt-10  space-y-6">
                        <Input onChange={(e)=>{setFirstName(e.target.value);}} placeholder="Raj" label="First Name:"/>
                        <Input onChange={(e)=>{setLastName(e.target.value);}} placeholder="Patel" label="Last Name:"/>
                        <Input onChange={(e)=>{setUserName(e.target.value);}} placeholder="raj@gmail.com" label="Email Address:"/>
                        <Input onChange={(e)=>{setPassword(e.target.value);}} placeholder="Password" label="Password:"/>
                        <Button onClick={async () =>{
                            const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
                                userName,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate('/dashboard');
                        }} label="Sign Up"/>
                    </div>
                    <p className=" mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 px-2">Login</a>
                    </p>
                </div>
            </div>;
}