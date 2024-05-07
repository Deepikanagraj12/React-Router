import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from "react";

function App() {

  const[isLoggedIn , setIsLoggedIn] = useState(false);

  return <div className="bg-richblack-900  text-richblack-5 w-screen h-screen">
        <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>
           <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}> </Route>
           <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}> </Route>
           <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}> </Route>
           <Route path="/Dashboard" element={<Dashboard isLoggedIn={isLoggedIn}/>}> </Route>
        </Routes>

      </div>;
}
export default App;
