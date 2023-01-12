import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Signup from "../Components/Signup";
import Task from "../Components/Task";

export default function AllRoutes(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/task" element={<Task />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}