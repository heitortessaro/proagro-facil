import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';

export default function App() {
  const [service, setService] = useState('register');
  const selectService = ({ target }) => {
    console.log(target.value);
    setService('register');
  };
  console.log(service);
  return (
    <div className="w-full h-screen max-w-[1000px] mx-auto">
      <Navbar />
      <div className="my-8">
        <label className="label-main" htmlFor="service">
          Serviço Desejado
          <select
            onClick={ selectService }
            className="input-form"
            id="service"
            name="service"
          >
            <option value="register">Registrar Ocorrência</option>
            <option value="update">Atualizar Registro</option>
            <option value="search">Buscar Registro</option>
            <option value="delete">Apagar Registro</option>
          </select>
        </label>
      </div>
      {service === 'register' && <Register />}
    </div>
  );
}
