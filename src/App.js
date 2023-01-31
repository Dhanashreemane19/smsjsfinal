import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

import Home from "./Home";
import View from "./View";
import Create from "./Create";
import Update from "./Update";
import ChangePassword from "./ChangePassword";


import {BrowserRouter,Routes,Route,Navigate }from "react-router-dom";
import { app } from "./FirebaseConfig";



function App() {
  return (
    <div className="App">
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/ >
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/fp" element={<ForgotPassword/>}/>
<Route path="/cp" element={<ChangePassword/>}/>
<Route path="/create" element={<Create/>}/ >
<Route path="/view" element={<View/>}/ >
<Route path="/update" element={<Update/>}/ >

<Route path="*" element={<Navigate to="/"/>}/ >
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
