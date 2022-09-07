// reference: https://www.devmedia.com.br/validar-cpf-com-javascript/23916
function validateCPF(cpf) {
  const nine = 9;
  const ten = 10;
  const eleven = 11;
  const twelve = 12;
  const minus = -1;

  const strCPF = String(cpf).replace(/[^\d]/g, '');
  if (strCPF.length !== eleven) return false;
  if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ].indexOf(strCPF) !== minus) { return false; }

  let sum = 0;
  let rest;

  for (let i = 1; i <= nine; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (eleven - i);
  }
  rest = (sum * ten) % eleven;

  // Validate last digits
  if ((rest === ten) || (rest === eleven)) rest = 0;
  if (rest !== parseInt(strCPF.substring(nine, ten), 10)) return false;

  sum = 0;
  for (let i = 1; i <= ten; i += 1) {
    sum += parseInt(strCPF.substring(i - 1, i), 10) * (twelve - i);
  }
  rest = (sum * ten) % eleven;

  if ((rest === ten) || (rest === eleven)) rest = 0;

  return rest === parseInt(strCPF.substring(ten, eleven), 10);
}

export default validateCPF;
