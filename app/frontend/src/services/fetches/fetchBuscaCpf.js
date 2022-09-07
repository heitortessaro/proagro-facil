const fetchBuscaCpf = async (cpf) => {
  const successfullyFetch = 200;
  const notFound = 404;
  const url = `http://0.0.0.0:8004/register/cpf/${cpf}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

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
