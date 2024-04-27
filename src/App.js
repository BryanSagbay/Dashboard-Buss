import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute" // Asegúrate de importar el componente PrivateRoute

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
