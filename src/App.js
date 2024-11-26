import './App.css';
import api from './api/axiosConfig'
import { useState,useEffect } from 'react';
import {Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Cuidadores from "./components/cuidadores/Cuidadores";
import Pacientes from "./components/pacientes/Pacientes";
import Login from "./components/login/Login";

function App() {
  const [pacientes, setPacientes] = useState();
  const [cuidador, setCuidador] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
      if (isAuthenticated) {
          getPacientes();
          getCuidadores();
      }
  }, [isAuthenticated]);

  const getPacientes = async () => {
      try {
          const response = await api.get("/api/v1/pacientes");
          setPacientes(response.data);
      } catch (err) {
          console.log(err);
      }
  };

  const getCuidadores = async () => {
      try {
          const response = await api.get("/api/v1/cuidadores");
          setCuidador(response.data);
      } catch (err) {
          console.log(err);
      }
  };

  return (
      <div className="App">
          <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/Cuidadores" element={<PrivateRoute isAuthenticated={isAuthenticated} component={<Cuidadores />} />} />
              <Route path="/Pacientes" element={<PrivateRoute isAuthenticated={isAuthenticated} component={<Pacientes />} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
      </div>
  );
}

const PrivateRoute = ({ isAuthenticated, component }) => {
  return isAuthenticated ? component : <Navigate to="/login" replace />;
};

export default App;