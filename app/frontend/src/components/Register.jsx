import React, { useState } from 'react';
import validateCPF from '../services/validateCPF';
import Select from './Select';
// import eventTypes from '../services/eventTypes';

export default function Register() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('teste');
  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    console.log(target.select.value);
    setShowMessage(true);
    setMessage('foi');
    console.log(validateCPF(target.cpf.value));
  };
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h2 className="page-title">Busca e Cadastro</h2>
      <form
        className="w-full max-w-lg flex flex-wrap mx-3 mb-6"
        onSubmit={ handleSubmit }
      >
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="
            label-form"
            htmlFor="form-name"
          >
            Nome
            <input
              name="name"
              className="input-form"
              id="form-name"
              type="text"
              placeholder="Nome"
            />
          </label>
        </div>
        <div className="w-full px-3">
          <label
            className="
              label-form"
            htmlFor="form-email"
          >
            E-mail
            <input
              name="email"
              className="input-form"
              id="form-email"
              type="text"
              placeholder="exemplo@exemplo.com"
            />
          </label>
        </div>
        <div className="w-full  px-3">
          <label
            className="label-form"
            htmlFor="form-cpf"
          >
            CPF
            <input
              name="cpf"
              className="input-form"
              id="form-cpf"
              type="text"
              placeholder="Apenas números"
            />
          </label>
        </div>
        <div className="w-1/2  px-3">
          <label
            className="
              label-form"
            htmlFor="formt-latitude"
          >
            (Localização) Latitude
            <input
              name="latitude"
              className="input-form"
              id="formt-latitude"
              type="text"
              placeholder="Apenas números"
            />
          </label>
        </div>
        <div className="w-1/2  px-3">
          <label className="label-form" htmlFor="formt-longitude">
            (Localização) Longitude
            <input
              name="longitude"
              className="input-form"
              id="formt-longitude"
              type="text"
              placeholder="Apenas números"
            />
          </label>
        </div>
        <div className="w-1/2  px-3">
          <label className="label-form" htmlFor="form-type">
            Tipo da Lavoura
            <input
              name="type"
              className="input-form"
              id="form-type"
              type="text"
              placeholder="milho, soja, feijão, ..."
            />
          </label>
        </div>
        <div className="w-1/2  px-3">
          <label className="label-form" htmlFor="form-date">
            Data da Colheita
            <input
              name="date"
              className="input-form"
              id="form-date"
              type="date"
              placeholder="Apenas números"
            />
          </label>
        </div>
        <Select />
        <div className="w-full flex justify-around px-3 mt-3 mb-6 md:mb-0">
          <button
            className="w-1/3 button-form"
            type="submit"
            value="register"
            name="register"
          >
            Cadastrar
          </button>
        </div>
      </form>
      {showMessage && <p>{message}</p>}
    </div>
  );
}
