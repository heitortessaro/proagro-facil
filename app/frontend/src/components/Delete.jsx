import React, { useState, useEffect } from 'react';
import validateId from '../services/validations/validateId';

export default function Delete() {
  const [id, setId] = useState('');
  const [enableBtn, setEnableBtn] = useState(false);
  // const [message, setMessage] = useState('');

  useEffect(() => {
    if (validateId(id)) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [id]);

  const handleSubmit = () => {
    console.log(id);
  };

  return (
    <section className="w-full flex flex-col justify-center items-center ">
      <h2 className="page-title">Apaga Cadastro</h2>
      {/* <form
        className="w-full max-w-lg flex flex-wrap mx-3 mb-6"
        onSubmit={ handleSubmit }
      > */}
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
              Adicione ID válido.
            </p>)}
          {enableBtn && (
            <p className="text-green-800 text-xs italic">
              ID válido.
            </p>)}
        </label>
      </div>

      <div className="w-full max-w-lg px-3 flex justify-center mt-3 mb-6 md:mb-0">
        <button
          className="w-1/3 button-form mx-auto"
          type="button"
          onClick={ handleSubmit }
          disabled={ !enableBtn }
        >
          Apagar Registro
        </button>
      </div>

      {/* </form> */}
      {/* {showMessage && <p className="message">{message}</p>} */}
    </section>
  );
}
