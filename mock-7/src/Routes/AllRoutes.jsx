import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/Admin";
import Home from "../components/Home";
import User from "../components/User";
import AdminNavbar from "../pages/AdminNavbar";
import DataPage from "../pages/DataPage";
import Login from "../pages/Login";
import Reportpage from "../pages/Reportpage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/user" element={<User />} />
      <Route
        path="/data"
        element={
          <PrivateRoute>
            <DataPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/report"
        element={
          <PrivateRoute>
            <Reportpage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
