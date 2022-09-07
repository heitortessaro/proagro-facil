import React from 'react';
import PropTypes from 'prop-types';

export default function RegisterCard({ registerData }) {
  return (
    <div className="registerCard">
      <p>
        <span>Nome:</span>
        {' '}
        {registerData.name}
      </p>
      <p>
        <span>E-mail:</span>
        {' '}
        {registerData.email}
      </p>
      <p>
        <span>CPF:</span>
        {' '}
        {registerData.cpf}
      </p>
      <p>
        <span>Localização-latitude:</span>
        {' '}
        {registerData.latitude}
      </p>
      <p>
        <span>Localização-longitude:</span>
        {' '}
        {registerData.longitude}
      </p>
      <p>
        <span>Tipo de lavoura:</span>
        {' '}
        {registerData.type}
      </p>
      <p>
        <span>Data da colheita:</span>
        {' '}
        {registerData.date}
      </p>
      <p>
        <span>Evento:</span>
        {' '}
        {registerData.event}
      </p>
      <p>
        <span>ID do registro:</span>
        {' '}
        {registerData.id}
      </p>
    </div>
  );
}

RegisterCard.propTypes = {
  registerData: PropTypes.shape({
    id: PropTypes.string,
    event: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    cpf: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
