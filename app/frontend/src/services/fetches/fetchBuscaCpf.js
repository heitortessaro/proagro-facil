import baseURL from '../baseURL';

const fetchBuscaCpf = async (cpf) => {
  const successfullyFetch = 200;
  const notFound = 404;
  const url = `${baseURL}/register/cpf/${cpf}`;

  const response = await fetch(url);
  const data = await response.json();

  if (response.status === successfullyFetch) {
    return { found: true, data };
  }
  if (response.status === notFound) {
    const { detail } = data;
    return { found: false, data: detail };
  }
  return false;
};

export default fetchBuscaCpf;
