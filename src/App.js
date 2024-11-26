import './App.css';
import api from './api/axiosConfig'
import { useState,useEffect } from 'react';
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Cuidadores from "./components/cuidadores/Cuidadores";
import Pacientes from "./components/pacientes/Pacientes";
import Login from "./components/login/Login";

function App() {
  const [pacientes, setPacientes] = useState();
  const [cuidador, setCuidador] = useState();

  useEffect(() => {
    getPacientes();
    getCuidadores();
  }, []);

  const getPacientes = async () => {
    try {
      const response = await api.get("/api/v1/pacientes");
      console.log(response.data);
      setPacientes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCuidadores = async () => {
    try {
      const response = await api.get("/api/v1/cuidadores");
      const cuidadores = response.data;
      console.log(cuidadores);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/Cuidadores" element={<Cuidadores />} />
          <Route path="/Pacientes" element={<Pacientes />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;