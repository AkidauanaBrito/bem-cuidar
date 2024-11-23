import './App.css';
import api from './api/axiosConfig'
import { useState,useEffect } from 'react';
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Cuidadores from "./components/cuidadores/Cuidadores";
import Pacientes from "./components/pacientes/Pacientes";
function App() {

  const [pacientes, setPacientes] = useState();

  const [cuidador, setCuidador] = useState();

 const getPacientes = async () =>{

  try{
    
    const response = await api.get("/api/v1/pacientes");
    console.log(response.data);
    setPacientes(response.data);

  }catch(err){
    console.log(err);
  }
 }

 const getCuidador = async (cuidadorId) => {
  try{

   const response = await api.get(`/api/v1/cuidadores/${cuidadorId}`);
   
   const singleCuidador = response.data;
   setCuidador(singleCuidador);

  }catch(err){
    console.log(err);
  }
 }

 const getCuidadores = async (cuidadorId) => {
  try{

   const response = await api.get(`/api/v1/cuidadores`);
   
   const cuidadores = response.data;
   console.log(cuidadores)

  }catch(err){
    console.log(err);
  }
 }

 useEffect(()=>{
  getPacientes();
  getCuidadores();
 },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/Cuidadores/" element={<Cuidadores />}> </Route>
        <Route path="/Pacientes/" element={<Pacientes />}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
