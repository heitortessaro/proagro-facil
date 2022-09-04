// reference: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
function validateCPF(cpf) {
  if (cpf === '00000000000') return false;

  let sum;
  let rest;
  sum = 0;

  const nine = 9;
  const ten = 10;
  const eleven = 11;
  const twelve = 12;

  for (i = 1; i <= nine; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (eleven - i);
  }
  rest = (sum * ten) % eleven;

  // Validate last digits
  if ((rest === ten) || (rest === eleven)) rest = 0;
  if (rest !== parseInt(cpf.substring(nine, ten), 10)) return false;

  sum = 0;
  for (i = 1; i <= ten; i += 1) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (twelve - i);
  }
  rest = (sum * ten) % eleven;

  if ((rest === ten) || (rest === eleven)) rest = 0;
  return (rest === parseInt(cpf.substring(ten, eleven), 10));
}

export default validateCPF;
