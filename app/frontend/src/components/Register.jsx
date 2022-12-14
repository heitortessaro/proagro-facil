import React, { useState } from 'react';
import fetchCadastro from '../services/fetches/fetchCadastro';
import validateForms from '../services/validations/validateForms';
import Select from './Select';
// import eventTypes from '../services/eventTypes';

export default function Register() {
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState([]);
  const [completeMessage, setCompleteMessage] = useState([]);

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
    setMessages([]);
    setShowMessages(false);
    const data = await fetchCadastro(formData);
    if (!data.veracity) {
      setCompleteMessage([
        'Cadastro realizado com sucesso',
        'Houve divergência quanto ao fenômeno. Por favor, verificar.',
      ]);
    } else {
      setCompleteMessage(['Cadastro realizado com sucesso']);
    }
    target.reset();
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h2 className="page-title">Busca e Cadastro</h2>
      <form
        className="w-full max-w-lg flex flex-wrap mx-3 mb-3"
        onSubmit={ handleSubmit }
        // onChange={ validateFormData }
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
              maxLength="11"
            />
          </label>
        </div>
        <div className="w-1/2  px-3">
          <label className="label-form" htmlFor="formt-latitude">
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
        <div className="w-full flex justify-around px-3 mt-3">
          {/* {enableBtn && ( */}
          <button
            className="w-1/3 button-form"
            type="submit"
            value="register"
            name="register"
            // disabled={ !enableBtn }
          >
            Cadastrar
          </button>
          {/* )} */}
        </div>
      </form>
      {showMessages && (
        <div className="message-warning">
          {messages.map((message) => <div key={ Math.random() }>{message}</div>)}
        </div>)}
      {!showMessages && (
        <div className="w-full flex flex-col items-center">
          {completeMessage.map((message) => (
            <div className="message-sucess" key={ Math.random() }>{message}</div>))}
        </div>)}
    </div>
  );
}
