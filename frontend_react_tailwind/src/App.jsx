import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/Signup";
import { TransferMoney } from "./pages/TransferMoney";
import { SignIn } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
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
