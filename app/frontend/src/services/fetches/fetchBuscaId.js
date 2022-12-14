import baseURL from '../baseURL';

const fetchBuscaId = async (id) => {
  const successfullyFetch = 200;
  const notFound = 404;
  const url = `${baseURL}/register/${id}`;

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

export default fetchBuscaId;
