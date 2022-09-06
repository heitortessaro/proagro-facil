import React, { useState } from 'react';
import Delete from './components/Delete';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Search from './components/Search';
import Update from './components/Update';

export default function App() {
  const [showService, setService] = useState('register');
  const selectService = ({ target }) => {
    // console.log(target.value);
    setService(target.value);
  };
  console.log(showService);
  return (
    <div className="w-full h-screen max-w-[1000px] mx-auto">
      <Navbar />
      <div className="mx-auto w-1/2 my-8">
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
      {showService === 'register' && <Register />}
      {showService === 'update' && <Update />}
      {showService === 'search' && <Search />}
      {showService === 'delete' && <Delete />}
    </div>
  );
}
