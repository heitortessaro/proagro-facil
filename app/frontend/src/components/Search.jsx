import React, { useState, useEffect } from 'react';
import fetchBuscaCpf from '../services/fetches/fetchBuscaCpf';
import fetchBuscaId from '../services/fetches/fetchBuscaId';
import validateCPF from '../services/validations/validateCPF';
import validateId from '../services/validations/validateId';
import RegisterCard from './RegisterCard';

export default function Delete() {
  const [id, setId] = useState('');
  const [enableIdBtn, setEnableIdBtn] = useState(false);
  const [cpf, setCpf] = useState('');
  const [enableCpfBtn, setEnableCpfBtn] = useState(false);
  const [registerData, setRegisterData] = useState([]);
  const [showRegisterData, setShowRegisterData] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (validateId(id)) {
      setEnableIdBtn(true);
    } else {
      setEnableIdBtn(false);
    }
  }, [id]);

  useEffect(() => {
    if (validateCPF(cpf)) {
      setEnableCpfBtn(true);
    } else {
      setEnableCpfBtn(false);
    }
  }, [cpf]);

  const handleSubmitId = async () => {
    setRegisterData([]);
    setShowMessage(false);
    const { data, found } = await fetchBuscaId(id);
    if (data && found) {
      setShowRegisterData(true);
      setRegisterData([data]);
      setId('');
    }
    if (data && !found) {
      setShowMessage(true);
      setMessage(data);
    }
  };

  const handleSubmitCpf = async () => {
    setRegisterData([]);
    setShowMessage(false);
    const { data, found } = await fetchBuscaCpf(cpf);
    if (data && found) {
      setShowRegisterData(true);
      setRegisterData(data);
      setId('');
    }
    if (data && !found) {
      setShowMessage(true);
      setMessage(data);
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <h2 className="page-title">Busca Cadastro</h2>
      <div className="w-full max-w-lg flex flex-wrap mx-3 mb-6">
        <div className="w-1/2  px-3">
          <label
            className="
            label-form"
            htmlFor="form-name"
          >
            Id do Registro
            <input
              className="input-form"
              id="form-name"
              type="text"
              placeholder="Id do Registro"
              onChange={ ({ target }) => setId(() => target.value) }
              value={ id }
            />
            {!enableIdBtn && (
              <p className="text-red-500 text-xs  italic">
                Adicione ID válido.
              </p>)}
            {enableIdBtn && (
              <p className="text-green-800 text-xs italic">
                ID válido.
              </p>)}
          </label>
        </div>

        <div className="w-1/2  px-3">
          <label
            className="
            label-form"
            htmlFor="form-name"
          >
            CPF relacionado ao registro
            <input
              className="input-form"
              id="form-name"
              type="text"
              placeholder="Id do Registro"
              onChange={ ({ target }) => setCpf(() => target.value) }
              value={ cpf }
            />
            {!enableCpfBtn && (
              <p className="text-red-500 text-xs  italic">
                Adicione CPF válido.
              </p>)}
            {enableCpfBtn && (
              <p className="text-green-800 text-xs italic">
                CPF válido.
              </p>)}
          </label>
        </div>

        {/* <div className="w-full max-w-lg flex justify-center mt-3 mb-6 md:mb-0"> */}
        <button
          className="w-1/3 button-form mt-2 mx-auto"
          type="button"
          onClick={ handleSubmitId }
          disabled={ !enableIdBtn }
        >
          Buscar Registros Com Id
        </button>
        <button
          className="w-1/3 button-form mt-2 mx-auto "
          type="button"
          onClick={ handleSubmitCpf }
          disabled={ !enableCpfBtn }
        >
          Buscar Registros Com CPF
        </button>
        {/* </div> */}
      </div>
      {showMessage && <p className="message">{message}</p>}
      {showRegisterData && registerData
        .map((reg) => <RegisterCard key={ reg.id } registerData={ reg } />) }
    </section>
  );
}
