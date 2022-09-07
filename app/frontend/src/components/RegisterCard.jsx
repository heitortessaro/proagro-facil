import React from 'react';
import PropTypes from 'prop-types';

export default function RegisterCard({ registerData }) {
  return (
    <div>
      <p>
        Nome:
        {' '}
        {registerData.name}
      </p>
      <p>
        E-mail:
        {' '}
        {registerData.email}
      </p>
      <p>
        CPF:
        {' '}
        {registerData.cpf}
      </p>
      <p>
        Localização-latitude:
        {' '}
        {registerData.latitude}
      </p>
      <p>
        Localização-longitude:
        {' '}
        {registerData.longitude}
      </p>
      <p>
        Tipo de lavoura:
        {' '}
        {registerData.type}
      </p>
      <p>
        Data da colheita:
        {' '}
        {registerData.date}
      </p>
      <p>
        Evento:
        {' '}
        {registerData.event}
      </p>
      <p>
        ID do registro:
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
