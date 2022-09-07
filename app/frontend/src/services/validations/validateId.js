// reference: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
function validateId(id) {
  return !!(id.match(/^[0-9a-fA-F]{24}$/));
}

export default validateId;
