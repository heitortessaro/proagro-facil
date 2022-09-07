import React, { useState, useEffect } from 'react';
import fetchDelete from '../services/fetchDelete';
import validateId from '../services/validations/validateId';

export default function Delete() {
  const [id, setId] = useState('');
  const [enableBtn, setEnableBtn] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (validateId(id)) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [id]);

  const handleSubmit = async () => {
    const response = await fetchDelete(id);
    if (response) {
      setShowMessage(true);
      setMessage(response);
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <h2 className="page-title">Apaga Cadastro</h2>
      <div className="w-full max-w-lg mb-6 md:mb-0">
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
              Adicione ID válido.
            </p>)}
          {enableBtn && (
            <p className="text-green-800 text-xs italic">
              ID válido.
            </p>)}
        </label>
      </div>

      <div className="w-full max-w-lg flex justify-center mt-3 mb-6 md:mb-0">
        <button
          className="w-1/3 button-form mx-auto"
          type="button"
          onClick={ handleSubmit }
          disabled={ !enableBtn }
        >
          Apagar Registro
        </button>
      </div>
      {showMessage && <p className="message">{message}</p>}
    </section>
  );
}
