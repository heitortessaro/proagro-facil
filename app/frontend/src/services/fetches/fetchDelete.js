import baseURL from '../baseURL';

const fetchDelete = async (id) => {
  const url = `${baseURL}/register/${id}`;
  const response = await fetch(url, { method: 'DELETE' });
  const successfullyRemoved = 204;
  const notFound = 404;
  if (response.status === successfullyRemoved) {
    return 'Registro removido com sucesso';
  } if (response.status === notFound) {
    const data = await response.json();
    return data.detail;
  }
  return false;
};

export default fetchDelete;
