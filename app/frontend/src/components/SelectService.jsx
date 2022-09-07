import React from 'react';
import PropTypes from 'prop-types';

export default function SelectService({ selectFunction }) {
  return (
    <div className="mx-auto w-1/2 my-8">
      <label className="label-main" htmlFor="service">
        Serviço Desejado
        <select
          onChange={ selectFunction }
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
  );
}

SelectService.propTypes = {
  selectFunction: PropTypes.func.isRequired,
};
