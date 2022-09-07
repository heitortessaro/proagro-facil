import React, { useState, useEffect } from 'react';
import validateForms from '../services/validations/validateForms';
import validateId from '../services/validations/validateId';
import fetchAtualizacao from '../services/fetches/fetchAtualizacao';
import Select from './Select';
// import eventTypes from '../services/eventTypes';

export default function Update() {
  const [id, setId] = useState('');
  const [enableBtn, setEnableBtn] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sucessMessage, setSucessMessage] = useState('');

  useEffect(() => {
    if (validateId(id)) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const { name, cpf, email, latitude, longitude, type, date, select: event } = target;
    const formData = {
      name: name.value || '',
      cpf: cpf.value || '',
      email: email.value || '',
      latitude: latitude.value || '',
      longitude: longitude.value || '',
      type: type.value,
      date: date.value,
      event: event.value,
    };
    const validationMessages = validateForms(formData);
    if (validationMessages) {
      setMessages(validationMessages);
      setShowMessages(true);
      // setEnableBtn(false);
      return;
    }
    const { sucess, message } = await fetchAtualizacao(id, formData);
    if (sucess) {
      setMessages([]);
      setShowMessages(false);
      setSucessMessage(message);
    } else {
      setSucessMessage('');
      setMessages([message]);
      setShowMessages(true);
    }
    // target.reset();
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h2 className="page-title">Atualiza Cadastro</h2>
      <div className="w-full max-w-lg px-3 mb-6 md:mb-0">
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
          {!enableBtn && (
            <p className="text-red-500 text-xs  italic">
              Adicione ID válido. A validação do formulário depende disso.
            </p>)}
          {enableBtn && (
            <p className="text-green-800 text-xs italic">
              ID válido.
            </p>)}
        </label>
      </div>
      <form
        className="w-full max-w-lg flex flex-wrap mx-3 mb-3"
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
            value="update"
            name="update"
          >
            Atualizar
          </button>
        </div>
      </form>
      {showMessages && (
        <div className="message-warning">
          {messages.map((message) => <div key={ Math.random() }>{message}</div>)}
        </div>)}
      {(!showMessages && sucessMessage !== '') && (
        <p className="message-sucess">{sucessMessage}</p>)}
      {/* {!showMessages && (
        <div className="w-full flex flex-col items-center">
          {completeMessage.map((message) => (
            <div className="message-sucess" key={ Math.random() }>{message}</div>))}
        </div>)} */}
    </div>
  );
}
