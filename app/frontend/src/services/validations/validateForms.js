import EmailValidator from 'email-validator';
import validateCoordenate from './validateCoordnates';
import validateCPF from './validateCPF';

function validateForms({ name, cpf, email, latitude, longitude }) {
  const messages = [];
  const minL = 6;
  if (name.length < minL) messages.push('O nome precisa ter mais de 6 caracteres.');
  if (!validateCPF(cpf)) messages.push('Forneça um cpf válido.');
  if (!EmailValidator.validate(email)) messages.push('Forneça email válido.');
  if (!validateCoordenate(latitude)) messages.push('Forneça latitude válida.');
  if (!validateCoordenate(longitude)) messages.push('Forneça longitude válida.');
  console.log(messages);
  if (messages.length <= 0) return true;
  return messages;
}

export default validateForms;
