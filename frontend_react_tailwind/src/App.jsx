import { useState } from "react";

import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { TransferMoney } from "./pages/TransferMoney";
import { SignIn } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
     
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/signin" Component={SignIn}></Route>
        <Route path="/send" Component={TransferMoney}></Route>
        <Route path="/dashboard" Component={Dashboard}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
