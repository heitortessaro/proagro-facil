import React from 'react';
import Select from './Select';
// import eventTypes from '../services/eventTypes';

export default function Search() {
  return (
    <form className="w-full max-w-lg flex flex-wrap mx-3 mb-6">
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          className="
            label-form"
          htmlFor="grid-first-name"
        >
          Nome
          <input
            className="input-form"
            id="grid-first-name"
            type="text"
            placeholder="Nome"
          />
        </label>
      </div>
      <div className="w-full px-3">
        <label
          className="
              label-form"
          htmlFor="grid-last-name"
        >
          E-mail
          <input
            className="input-form"
            id="grid-last-name"
            type="text"
            placeholder="exemplo@exemplo.com"
          />
        </label>
      </div>
      <div className="w-full  px-3">
        <label
          className="
              label-form"
          htmlFor="grid-last-name"
        >
          CPF
          <input
            className="input-form"
            id="grid-last-name"
            type="text"
            placeholder="Apenas números"
          />
        </label>
      </div>
      <div className="w-1/2  px-3">
        <label
          className="
              label-form"
          htmlFor="grid-last-name"
        >
          (Localização) Latitude
          <input
            className="input-form"
            id="grid-last-name"
            type="text"
            placeholder="Apenas números"
          />
        </label>
      </div>
      <div className="w-1/2  px-3">
        <label
          className="
              label-form"
          htmlFor="grid-last-name"
        >
          (Localização) Longitude
          <input
            className="input-form"
            id="grid-last-name"
            type="text"
            placeholder="Apenas números"
          />
        </label>
      </div>
      <div className="w-1/2  px-3">
        <label
          className="
              label-form"
          htmlFor="grid-last-name"
        >
          Tipo da Lavoura
          <input
            className="input-form"
            id="grid-last-name"
            type="text"
            placeholder="milho, soja, feijão, ..."
          />
        </label>
      </div>
      <div className="w-1/2  px-3">
        <label
          className="
              label-form"
          htmlFor="grid-last-name"
        >
          Data da Colheita
          <input
            className="input-form"
            id="grid-last-name"
            type="date"
            placeholder="Apenas números"
          />
        </label>
      </div>
      <Select />
      <div className="w-full flex justify-around px-3 mt-3 mb-6 md:mb-0">
        <button className="w-1/3 button-form" type="button">Cadastrar</button>
        <button className="w-1/3 button-form" type="button">Atualizar</button>
      </div>
    </form>
  );
}
